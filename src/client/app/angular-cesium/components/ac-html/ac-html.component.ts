import {Component, AfterViewInit, Input, ElementRef, OnDestroy} from '@angular/core';
import {MapService} from "../../services/core/map.service";
import {AfterMapInit} from "../../services/core/after-map-init";

@Component({
  moduleId: module.id,
  selector: 'ac-html',
  template: `<ng-content></ng-content>`,
  styleUrls: ['ac-html.component.css']
})
export class AngularCesiumHtmlComponent extends AfterMapInit implements OnDestroy {
  @Input() position: any;
  preRenderEventListener: ()=>void;
  private map: any;

  constructor(private mapService: MapService, private elementRef: ElementRef) {
    super(mapService);
  }

  afterMapInit(map: any): void {
    this.map = map;
    this.preRenderEventListener = ()=> {
      let screenPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(map.scene, this.position);
      this.setScreenPosition(screenPosition);
    };
    this.map.scene.preRender.addEventListener(this.preRenderEventListener);
  }

  setScreenPosition(screenPosition: any) {
    this.elementRef.nativeElement.style.top = `${screenPosition.y}px`;
    this.elementRef.nativeElement.style.left = `${screenPosition.x}px`;
  }

  ngOnDestroy(): void {
    this.map.scene.preRender.removeEventListener(this.preRenderEventListener);
  }


}
