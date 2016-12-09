import {AngularCesiumHtmlComponent} from "./ac-html.component";
import {MapService} from "../../services/core/map.service";
import {ElementRef} from "@angular/core";

export function main() {
  describe('ac-html tests', () => {
    let component: AngularCesiumHtmlComponent;
    let mapService: MapService;
    let elementRef: ElementRef;
    let cesiumViewerMock: any;
    beforeEach(()=> {
      cesiumViewerMock = {
        scene: {
          preRender: {
            addEventListener: (callback: ()=>void)=> {
            },
            removeEventListener: (callback: ()=>void)=> {
            }
          }
        }
      };
      mapService = new MapService();
      elementRef = new ElementRef({style: {top: 0, left: 0}});
      component = new AngularCesiumHtmlComponent(mapService, elementRef);
    });

    it('Should register to pre render event', () => {
      // Arrange
      spyOn(cesiumViewerMock.scene.preRender, 'addEventListener');

      // Act
      component.afterMapInit(cesiumViewerMock);

      // Assert
      expect(cesiumViewerMock.scene.preRender.addEventListener).toHaveBeenCalledWith(component.preRenderEventListener);

    });

    it('Should remove registration to pre render event', () => {
      // Arrange
      component.afterMapInit(cesiumViewerMock);
      spyOn(cesiumViewerMock.scene.preRender, 'removeEventListener');

      // Act
      component.ngOnDestroy();

      // Assert
      expect(cesiumViewerMock.scene.preRender.removeEventListener).toHaveBeenCalledWith(component.preRenderEventListener);
    });

    it('Should set the screen position', () => {
      // Arrange
      let screenPosition: any = {x: 100, y: 100};

      // Act
      component.setScreenPosition(screenPosition);

      // Assert
      expect(elementRef.nativeElement.style.top).toEqual(`${screenPosition.y}px`);
      expect(elementRef.nativeElement.style.left).toEqual(`${screenPosition.x}px`);
    });
  });
}
