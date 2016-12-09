import {Component, ContentChildren} from '@angular/core';
import {AbstractMapComponent} from "../../../ac-abstract-map-component/abstract-map-component.component";
import {EntitiesService} from "../../../../services/drawers/primitives/entities.service";
import {MapService} from "../../../../services/core/map.service";
import {CesiumEntityHolder} from "../../../../services/entity.service";
import {cesiumEntityInputs} from "../../../../constants/cesium-inputs.constants";
import {SymbolHolder} from "../../../../services/symbol.service";

declare var Cesium: any;

@Component({
  moduleId: module.id,
  selector: 'ac-entity',
  template: ``,
  inputs: cesiumEntityInputs,
  providers: [CesiumEntityHolder]
})
export class AngularCesiumEntityComponent extends AbstractMapComponent {
  constructor(mapService: MapService, entitiesService: EntitiesService, private cesiumEntityHolder: CesiumEntityHolder, symbolHolder?: SymbolHolder) {
    super(mapService, entitiesService, cesiumEntityInputs, undefined, symbolHolder);
  }

  afterMapInit(map: any) {
    super.afterMapInit(map);
    this.cesiumEntityHolder.setCesiumObject(this.cesiumObject);
  }
}
