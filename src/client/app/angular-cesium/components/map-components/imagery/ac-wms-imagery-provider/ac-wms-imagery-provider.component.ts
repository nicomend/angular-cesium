import {Component} from "@angular/core";
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {MapService} from "../../../../services/core/map.service";
import {WmsImageryProviderService} from "../../../../services/drawers/imagery/wms-imagery-provider-service";
import {cesiumWmsImageryProviderInputs} from "../../../../constants/cesium-inputs.constants";
@Component({
  moduleId: module.id,
  selector: 'ac-wms-imagery-provider',
  template: ``,
  inputs: cesiumWmsImageryProviderInputs
})
export class AngularCesiumWmsImageryProviderComponent extends AbstractMapComponent {

  constructor(mapService: MapService, wmsImageryProviderService: WmsImageryProviderService) {
    super(mapService, wmsImageryProviderService, cesiumWmsImageryProviderInputs);
  }

}
