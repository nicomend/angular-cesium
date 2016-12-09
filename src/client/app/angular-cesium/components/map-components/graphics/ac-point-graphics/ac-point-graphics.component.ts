import {Component, Optional} from '@angular/core';
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {PointsGraphicsService} from "../../../../services/drawers/graphics/points-graphics.service";
import {cesiumPointInputs} from "../../../../constants/cesium-inputs.constants";
import {MapService} from "../../../../services/core/map.service";
import {CesiumEntityHolder} from "../../../../services/entity.service";

@Component({
  moduleId: module.id,
  selector: 'ac-point-graphics',
  template: ``,
  inputs: cesiumPointInputs
})
export class AngularCesiumPointGraphicsComponent extends AbstractMapComponent {

  constructor(mapService: MapService, pointsService: PointsGraphicsService, entityService:CesiumEntityHolder) {
    super(mapService, pointsService, cesiumPointInputs, entityService);
  }

}
