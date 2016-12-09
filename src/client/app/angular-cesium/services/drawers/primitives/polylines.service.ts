import {CollectionDrawer} from "../../core/collection-drawer";
import {MapService} from "../../core/map.service";
import {Injectable} from "@angular/core";

@Injectable()
export class PolylinesService extends CollectionDrawer {
  constructor(mapService: MapService) {
    super(mapService);
  }

  protected createCollection(): any {
    return new Cesium.PolylineCollection();
  }

}
