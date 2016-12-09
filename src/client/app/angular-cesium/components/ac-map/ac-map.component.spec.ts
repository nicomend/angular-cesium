import {MapService} from "../../services/core/map.service";
import {AngularCesiumMapComponent} from "./ac-map.component";

export function main() {
  describe('ac-map tests', () => {
    let mapService: MapService;
    let cesiumViewerMock: any;
    beforeEach(()=> {
      cesiumViewerMock = {};
      mapService = new MapService();
    });

    it('Should check that id is unique', () => {
      // Arrange, Act
      let component1 = new AngularCesiumMapComponent(mapService);
      setTimeout(()=> {
        let component2 = new AngularCesiumMapComponent(mapService);

        // Assert
        expect(component1.id).not.toEqual(component2.id);
      }, 1)
    });

    describe('afterViewInit', ()=> {
      let component: AngularCesiumMapComponent;
      beforeEach(()=> {
        spyOn(Cesium, 'Viewer');
        spyOn(mapService, 'init');
        component = new AngularCesiumMapComponent(mapService);

      });

      it('Should call to mapService.init', ()=> {
        // Act
        component.ngAfterViewInit();

        // Assert
        expect(mapService.init).toHaveBeenCalled();
      });

      it('Should create cesium viewer', ()=> {
        // Act
        component.ngAfterViewInit();

        // Assert
        expect(Cesium.Viewer).toHaveBeenCalled();
      });

      it('Should not register to map events', ()=> {
        // Arrange
        spyOn(mapService, 'registerEvent');

        // Act
        component.ngAfterViewInit();

        // Assert
        expect(mapService.registerEvent).not.toHaveBeenCalled();
      });

      it('Should register to map events', ()=> {
        // Arrange
        component.leftClick.subscribe(()=> {
        });
        spyOn(mapService, 'registerEvent');

        // Act
        component.ngAfterViewInit();

        // Assert
        expect(mapService.registerEvent).toHaveBeenCalledWith(component.leftClick, Cesium.ScreenSpaceEventType.LEFT_CLICK, undefined);
      });

      it('Should register to map events', ()=> {
        // Arrange
        component.mouseMove.subscribe(()=> {
        });
        spyOn(mapService, 'registerEvent');

        // Act
        component.ngAfterViewInit();

        // Assert
        expect(mapService.registerEvent).toHaveBeenCalledWith(component.mouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE, undefined);
      });

      it('Should register to map events', ()=> {
        // Arrange
        component.ctrlLeftClick.subscribe(()=> {
        });
        spyOn(mapService, 'registerEvent');

        // Act
        component.ngAfterViewInit();

        // Assert
        expect(mapService.registerEvent).toHaveBeenCalledWith(component.ctrlLeftClick, Cesium.ScreenSpaceEventType.LEFT_CLICK, Cesium.KeyboardEventModifier.CTRL);
      });
    });
  });
}
