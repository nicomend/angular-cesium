import {CollectionDrawer} from "../../core/collection-drawer";
import {Injectable, NgZone} from "@angular/core";
import {MapService} from "../../core/map.service";

@Injectable()
export class PointsService extends CollectionDrawer {
  constructor(mapService: MapService, ngZone: NgZone) {
    super(mapService, ngZone);
  }

  protected createCollection(): any {
    return new Cesium.PointPrimitiveCollection();
  }

}
