import {Component} from '@angular/core';
import {cesiumPointInputs} from "../../../../constants/cesium-inputs.constants";
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {MapService} from "../../../../services/core/map.service";
import {PointsService} from "../../../../services/drawers/primitives/points.service";
import {SymbolHolder} from "../../../../services/symbol.service";

declare var Cesium: any;

@Component({
  moduleId: module.id,
  selector: 'ac-point',
  template: ``,
  inputs: cesiumPointInputs
})
export class AngularCesiumPointComponent extends AbstractMapComponent {

  constructor(mapService: MapService, pointsService: PointsService, symbolHolder?: SymbolHolder) {
    super(mapService, pointsService, cesiumPointInputs, undefined, symbolHolder);
  }

}
