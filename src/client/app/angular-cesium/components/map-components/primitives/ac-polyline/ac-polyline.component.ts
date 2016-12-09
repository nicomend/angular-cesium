import {Component} from '@angular/core';
import {cesiumPolylineInputs} from "../../../../constants/cesium-inputs.constants";
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {PolylinesService} from "../../../../services/drawers/primitives/polylines.service";
import {MapService} from "../../../../services/core/map.service";
import {SymbolHolder} from "../../../../services/symbol.service";

declare var Cesium: any;

@Component({
  moduleId: module.id,
  selector: 'ac-polyline',
  template: ``,
  inputs: cesiumPolylineInputs
})
export class AngularCesiumPolylineComponent extends AbstractMapComponent {

  constructor(mapService: MapService, polylinesService: PolylinesService, symbolHolder?: SymbolHolder) {
    super(mapService, polylinesService, cesiumPolylineInputs, undefined, symbolHolder);
  }

}
