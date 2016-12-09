import {CollectionDrawer} from "../../core/collection-drawer";
import {MapService} from "../../core/map.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LabelsService extends CollectionDrawer {
  constructor(mapService: MapService) {
    super(mapService);
  }

  protected createCollection(): any {
    return new Cesium.LabelCollection();
  }

}
