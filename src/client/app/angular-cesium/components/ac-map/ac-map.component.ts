import {Component, OnInit, AfterViewInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {CESIUM_VIEWER_OPTIONS} from "../../constants/cesium-viewer-options.constants";
import {MAP_PROVIDERS} from "../../services/index";
import {MapService, MapEventData} from "../../services/core/map.service";

declare var Cesium: any;

@Component({
  moduleId: module.id,
  selector: 'ac-map',
  templateUrl: 'ac-map.component.html',
  styleUrls: ['ac-map.component.css'],
  providers: [MAP_PROVIDERS]
})
export class AngularCesiumMapComponent implements AfterViewInit {
  @Output() leftClick = new EventEmitter<MapEventData>();
  @Output() ctrlLeftClick = new EventEmitter<MapEventData>();
  @Output() mouseMove = new EventEmitter<MapEventData>();
  id: string;

  constructor(private mapService: MapService) {
    this.id = AngularCesiumMapComponent.generateId();
  }

  ngAfterViewInit(): void {
    let map = this.createCesiumViewer();
    this.mapService.init(map);
    this._registerEventEmitters();
  }

  private _registerEventEmitters() {
    this._registerEventEmitter(this.leftClick, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    this._registerEventEmitter(this.ctrlLeftClick, Cesium.ScreenSpaceEventType.LEFT_CLICK, Cesium.KeyboardEventModifier.CTRL);
    this._registerEventEmitter(this.mouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  private _registerEventEmitter(eventEmitter: EventEmitter<MapEventData>, cesiumEventType: any, modifier?: string) {
    if (eventEmitter.observers.length > 0) {
      this.mapService.registerEvent(eventEmitter, cesiumEventType, modifier);
    }
  }

  private createCesiumViewer(): any {
    return new Cesium.Viewer(this.id, CESIUM_VIEWER_OPTIONS);
  }

  private static generateId() {
    let date = new Date().getTime();
    return `${date}Map`;
  }
}
