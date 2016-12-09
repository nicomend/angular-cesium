import {CollectionDrawer} from "../../core/collection-drawer";
import {Injectable} from "@angular/core";
import {MapService} from "../../core/map.service";

@Injectable()
export class PointsService extends CollectionDrawer {
  constructor(mapService: MapService) {
    super(mapService);
  }

  protected createCollection(): any {
    return new Cesium.PointPrimitiveCollection();
  }

}
