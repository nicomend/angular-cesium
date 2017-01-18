import {Component} from '@angular/core';
import {DataService} from "./services/data/data.service";
import {EntityStatusToColorPipe} from "./pipes/entity-status-to-color.pipe";
import {entitiesInitialState} from "./state/state";
import {BehaviorSubject, Observable} from "rxjs";
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
  subject: BehaviorSubject<any>;

  constructor() {
    let entities = entitiesInitialState();
    this.subject = new BehaviorSubject(entities);
    Observable.interval(500).subscribe(() => {
      entities = entities.map((entity)=>{
        entity.position = {lat: entity.position.lat+0.4, long: entity.position.long + 0.4};
        return entity;
      });
      this.subject.next(entities);
    });
  }
}
