import {ImageryLayersDrawer} from "../../core/imagery-layers-drawer";
import {Injectable} from "@angular/core";
import {MapService} from "../../core/map.service";

@Injectable()
export class WmsImageryProviderService extends ImageryLayersDrawer {
  constructor(mapService: MapService) {
    super(mapService);
  }

  protected createImageryProvider(options:any): any {
    return new Cesium.WebMapServiceImageryProvider(options);
  }

}
