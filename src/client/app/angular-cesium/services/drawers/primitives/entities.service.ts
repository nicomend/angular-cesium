import {Injectable} from "@angular/core";
import {MapService} from "../../core/map.service";
import {Drawer} from "../../core/drawer";
import {CesiumEntityHolder} from "../../entity.service";
import {AfterMapInit} from "../../core/after-map-init";

@Injectable()
export class EntitiesService extends AfterMapInit implements Drawer {
  private entityCollection: any;

  constructor(private mapService: MapService) {
    super(mapService);
  }

  afterMapInit(map: any): void {
    this.entityCollection = map.entities;
  }

  deleteObject(cesiumObject: any, entity?: CesiumEntityHolder): void {
    this.entityCollection.remove(cesiumObject);
  }

  addObject(options: any, entity?: CesiumEntityHolder): any {
    return this.entityCollection.add(new Cesium.Entity(options));
  }
}
