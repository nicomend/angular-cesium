import {Drawer} from "./drawer";
import {MapService} from "./map.service";
import {CesiumEntityHolder} from "../entity.service";
import {AfterMapInit} from "./after-map-init";
import {NgZone} from "@angular/core";

export abstract class CollectionDrawer extends AfterMapInit implements Drawer {
  private _collection: any;

  constructor(private mapService: MapService, private ngZone: NgZone) {
    super(mapService);
  }

  afterMapInit(map: any): void {
    this._collection = this.createCollection();
    this.mapService.addCollection(this._collection);
  }

  deleteObject(cesiumObject: any, entity?: CesiumEntityHolder): void {
    this.ngZone.runOutsideAngular(() => {
      this._collection.remove(cesiumObject);
    });
  }

  addObject(options: any, entity?: CesiumEntityHolder): any {
    return this.ngZone.runOutsideAngular(() => {
      return this._collection.add(options);
    })
  }

  protected abstract createCollection(): any;
}
