import {Component} from '@angular/core';
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {cesiumBillboardInputs} from "../../../../constants/cesium-inputs.constants";
import {MapService} from "../../../../services/core/map.service";
import {CesiumEntityHolder} from "../../../../services/entity.service";
import {BillboardsGraphicsService} from "../../../../services/drawers/graphics/billboards-graphics.service";

@Component({
  moduleId: module.id,
  selector: 'ac-billboard-graphics',
  template: ``,
  inputs: cesiumBillboardInputs
})
export class AngularCesiumBillboardGraphics extends AbstractMapComponent {

  constructor(mapService: MapService, billboardsGraphicsService: BillboardsGraphicsService, entityService: CesiumEntityHolder) {
    super(mapService, billboardsGraphicsService, cesiumBillboardInputs, entityService);
  }

}
