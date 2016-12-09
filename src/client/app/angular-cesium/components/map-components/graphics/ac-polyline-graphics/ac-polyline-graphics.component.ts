import {Component} from '@angular/core';
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {cesiumPolylineInputs} from "../../../../constants/cesium-inputs.constants";
import {MapService} from "../../../../services/core/map.service";
import {CesiumEntityHolder} from "../../../../services/entity.service";
import {PolylinesGraphicsService} from "../../../../services/drawers/graphics/polyline-graphics.service";

@Component({
  moduleId: module.id,
  selector: 'ac-polyline-graphics',
  template: ``,
  inputs: cesiumPolylineInputs
})
export class AngularCesiumPolylineGraphics extends AbstractMapComponent {

  constructor(mapService: MapService, polylinesGraphicsService: PolylinesGraphicsService, entityService:CesiumEntityHolder) {
    super(mapService, polylinesGraphicsService, cesiumPolylineInputs, entityService);
  }

}
