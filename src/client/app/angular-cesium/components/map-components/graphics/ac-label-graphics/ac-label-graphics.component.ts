import {Component} from '@angular/core';
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {cesiumLabelInputs} from "../../../../constants/cesium-inputs.constants";
import {MapService} from "../../../../services/core/map.service";
import {CesiumEntityHolder} from "../../../../services/entity.service";
import {LabelsGraphicsService} from "../../../../services/drawers/graphics/labels-graphics.service";

@Component({
  moduleId: module.id,
  selector: 'ac-label-graphics',
  template: ``,
  inputs: cesiumLabelInputs
})
export class AngularCesiumLabelGraphicsComponent extends AbstractMapComponent {

  constructor(mapService: MapService, labelsGraphicsService: LabelsGraphicsService, entityService:CesiumEntityHolder) {
    super(mapService, labelsGraphicsService, cesiumLabelInputs, entityService);
  }

}
