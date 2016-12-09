import {Component} from "@angular/core";
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {MapService} from "../../../../services/core/map.service";
import {cesiumGoogleEarthImageryProviderInputs} from "../../../../constants/cesium-inputs.constants";
import {GoogleEarthImageryProviderService} from "../../../../services/drawers/imagery/google-earth-imagery-provider-service";

@Component({
  moduleId: module.id,
  selector: 'ac-google-earth-imagery-provider',
  template: ``,
  inputs: cesiumGoogleEarthImageryProviderInputs
})
export class AngularCesiumGoogleEarthImageryProviderComponent extends AbstractMapComponent {

  constructor(mapService: MapService, googleEarthImageryProviderService: GoogleEarthImageryProviderService) {
    super(mapService, googleEarthImageryProviderService, cesiumGoogleEarthImageryProviderInputs);
  }

}
