import {Component} from '@angular/core';
import {DataService} from "./services/data/data.service";
import {EntityStatusToColorPipe} from "./pipes/entity-status-to-color.pipe";
declare var Cesium: any;

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataService]
})

export class AppComponent {
}
