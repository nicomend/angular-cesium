import {NgModule} from '@angular/core';
import {AngularCesiumMapComponent} from "./components/ac-map/ac-map.component";
import {AngularCesiumPointComponent} from "./components/map-components/primitives/ac-point/ac-point.component";
import {AngularCesiumBillboardComponent} from "./components/map-components/primitives/ac-billboard/ac-billboard.component";
import {AngularCesiumLabelComponent} from "./components/map-components/primitives/ac-label/ac-label.component";
import {AngularCesiumPolylineComponent} from "./components/map-components/primitives/ac-polyline/ac-polyline.component";
import {AngularCesiumEntityComponent} from "./components/map-components/primitives/ac-entity/ac-entity.component";
import {AngularCesiumPointGraphicsComponent} from "./components/map-components/graphics/ac-point-graphics/ac-point-graphics.component";
import {AngularCesiumLabelGraphicsComponent} from "./components/map-components/graphics/ac-label-graphics/ac-label-graphics.component";
import {AngularCesiumSymbolComponent} from "./components/ac-symbol/ac-symbol.component";
import {AngularCesiumHtmlComponent} from "./components/ac-html/ac-html.component";
import {AngularCesiumWmsImageryProviderComponent} from "./components/map-components/imagery/ac-wms-imagery-provider/ac-wms-imagery-provider.component";
import {AngularCesiumGoogleEarthImageryProviderComponent} from "./components/map-components/imagery/ac-google-earth-imagery-provider/ac-google-earth-imagery-provider.component";

@NgModule({
  declarations: [AngularCesiumMapComponent, AngularCesiumPointComponent, AngularCesiumBillboardComponent, AngularCesiumLabelComponent, AngularCesiumPolylineComponent, AngularCesiumEntityComponent, AngularCesiumPointGraphicsComponent, AngularCesiumLabelGraphicsComponent, AngularCesiumSymbolComponent, AngularCesiumHtmlComponent, AngularCesiumWmsImageryProviderComponent, AngularCesiumGoogleEarthImageryProviderComponent],
  exports: [AngularCesiumMapComponent, AngularCesiumPointComponent, AngularCesiumBillboardComponent, AngularCesiumLabelComponent, AngularCesiumPolylineComponent, AngularCesiumEntityComponent, AngularCesiumPointGraphicsComponent, AngularCesiumLabelGraphicsComponent, AngularCesiumSymbolComponent, AngularCesiumHtmlComponent, AngularCesiumWmsImageryProviderComponent, AngularCesiumGoogleEarthImageryProviderComponent]
})
export class AngularCesiumModule {
}
