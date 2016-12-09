import {Component} from '@angular/core';
import {cesiumLabelInputs} from "../../../../constants/cesium-inputs.constants";
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {LabelsService} from "../../../../services/drawers/primitives/labels.service";
import {MapService} from "../../../../services/core/map.service";
import {SymbolHolder} from "../../../../services/symbol.service";

declare var Cesium: any;

@Component({
  moduleId: module.id,
  selector: 'ac-label',
  template: ``,
  inputs: cesiumLabelInputs
})
export class AngularCesiumLabelComponent extends AbstractMapComponent {

  constructor(mapService: MapService, labelsService: LabelsService, symbolHolder?: SymbolHolder) {
    super(mapService, labelsService, cesiumLabelInputs, undefined, symbolHolder);
  }

}
