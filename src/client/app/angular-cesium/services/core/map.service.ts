import {EventEmitter} from "@angular/core";
import {Injectable} from "@angular/core";

@Injectable()
export class MapService {
  private mapInitEmitter: EventEmitter<any>;
  private map: any;
  private handler: any;

  constructor() {
    this.mapInitEmitter = new EventEmitter();
  }

  getMap(): Promise<any> {
    return new Promise<any>((resolve)=> {
      if (!this.map) {
        this.mapInitEmitter.subscribe(resolve);
      } else {
        resolve(this.map);
      }
    });
  }

  registerEvent(eventEmitter: EventEmitter<MapEventData>, cesiumEventType: number, modifier?: any) {

    this.handler.setInputAction((cesiumEventData: any)=> {
      switch (cesiumEventType) {
        case Cesium.ScreenSpaceEventType.MOUSE_MOVE:
          this._handleMouseMove(cesiumEventData, eventEmitter);
          break;
        default:
          this._handleMouseClick(cesiumEventData, eventEmitter);
          break;
      }

    }, cesiumEventType, modifier);
  }


  private _handleMouseMove(cesiumEventData: any, eventEmitter: EventEmitter<MapEventData>) {
    let pickPosition = cesiumEventData.endPosition;
    let cartesian = this.map.camera.pickEllipsoid(pickPosition, this.map.scene.globe.ellipsoid);
    if (cartesian) {
      let pickedObjects: any[];
      let pick = this.map.scene.pick(pickPosition);
      if (pick) {
        pickedObjects = [pick];
      }
      eventEmitter.emit({
        cesiumEventData: cesiumEventData,
        pickedObjects: pickedObjects
      });
    }
  }

  private _handleMouseClick(cesiumEventData: any, eventEmitter: EventEmitter<MapEventData>) {
    let pickPosition = cesiumEventData.position;
    let pickedObjects = this.map.scene.drillPick(pickPosition);
    eventEmitter.emit({
      cesiumEventData: cesiumEventData,
      pickedObjects: pickedObjects
    });
  }

  init(map: any) {
    this.map = map;
    this.handler = new Cesium.ScreenSpaceEventHandler(map.scene.canvas);
    this.mapInitEmitter.emit(map);
    this.mapInitEmitter.unsubscribe();
  }

  addCollection(collection: any) {
    this.map.scene.primitives.add(collection);
  }
}

export interface MapEventData {
  cesiumEventData: any;
  pickedObjects: any[];
}
