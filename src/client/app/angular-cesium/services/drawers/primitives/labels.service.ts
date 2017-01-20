import {CollectionDrawer} from "../../core/collection-drawer";
import {MapService} from "../../core/map.service";
import {Injectable, NgZone} from "@angular/core";

@Injectable()
export class LabelsService extends CollectionDrawer {
  constructor(mapService: MapService,ngZone: NgZone) {
    super(mapService,ngZone);
  }

  protected createCollection(): any {
    return new Cesium.LabelCollection();
  }

}
