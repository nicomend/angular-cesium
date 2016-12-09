import {CesiumEntityHolder} from "../../../../services/entity.service";
import {AngularCesiumEntityComponent} from "./ac-entity.component";
import {MapService} from "../../../../services/core/map.service";
import {EntitiesService} from "../../../../services/drawers/primitives/entities.service";
export function main() {
  describe('ac-entity tests', () => {
    let component: AngularCesiumEntityComponent;
    let entityHolder: CesiumEntityHolder;
    let entitiesService: EntitiesService;

    beforeEach(()=> {
      let mapService = new MapService();
      entityHolder = new CesiumEntityHolder();
      entitiesService = new EntitiesService(mapService);
      component = new AngularCesiumEntityComponent(mapService, entitiesService, entityHolder);
    });

    describe('On init', ()=> {
      it('Should initialize the entity holder', ()=> {
        let cesiumObject = {'object': 'object'};
        spyOn(entitiesService, 'addObject').and.returnValue(cesiumObject);
        spyOn(entityHolder, 'setCesiumObject');

        // Act
        component.afterMapInit({});

        // Assert
        expect(entityHolder.setCesiumObject).toHaveBeenCalledWith(cesiumObject);
      })
    });

  });
}
