import {MapService} from "./map.service";
import {Drawer} from "./drawer";
import {AfterMapInit} from "./after-map-init";

export abstract class ImageryLayersDrawer extends AfterMapInit implements Drawer {
  private imageryLayers: any;

  constructor(mapService: MapService) {
    super(mapService);
  }

  afterMapInit(map: any): void {
    this.imageryLayers = map.imageryLayers;
  }

  deleteObject(cesiumObject: any): void {
    this.imageryLayers.remove(cesiumObject, true);
  }

  addObject(options: any): any {
    let provider = this.createImageryProvider(options);
    return this.imageryLayers.addImageryProvider(provider);
  }

  protected abstract createImageryProvider(options:any): any;
}
