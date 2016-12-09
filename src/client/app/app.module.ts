import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {buildReducersObject} from "./reducers/reducres";
import {buildInitialState} from "./state/state";
import {COMPONENTS} from "./components/components.module";
import {AngularCesiumModule} from "./angular-cesium/angular-cesium.module";
import {BrowserModule} from "@angular/platform-browser";
import {EntityStatusToColorPipe} from "./pipes/entity-status-to-color.pipe";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";

@NgModule({
  imports: [BrowserModule, AngularCesiumModule, HttpModule,
    StoreModule.provideStore(buildReducersObject(), buildInitialState()),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 20,
      monitor: useLogMonitor({
        visible: true,
        position: 'bottom'
      })
    }),
    StoreLogMonitorModule],
  declarations: [...COMPONENTS, EntityStatusToColorPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

