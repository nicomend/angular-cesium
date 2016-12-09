import {Component} from '@angular/core';
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {BillboardsService} from "../../../../services/drawers/primitives/billboards.service";
import {cesiumBillboardInputs} from "../../../../constants/cesium-inputs.constants";
import {MapService} from "../../../../services/core/map.service";
import {SymbolHolder} from "../../../../services/symbol.service";

declare var Cesium: any;

@Component({
  moduleId: module.id,
  selector: 'ac-billboard',
  template: ``,
  inputs: cesiumBillboardInputs
})
export class AngularCesiumBillboardComponent extends AbstractMapComponent {

  constructor(mapService: MapService, billboardsService: BillboardsService, symbolHolder?: SymbolHolder) {
    super(mapService, billboardsService, cesiumBillboardInputs, undefined, symbolHolder);
  }

}
