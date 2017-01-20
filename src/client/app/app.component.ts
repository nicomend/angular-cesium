import {Component, AfterViewInit} from '@angular/core';
import {DataService} from "./services/data/data.service";
import {EntityStatusToColorPipe} from "./pipes/entity-status-to-color.pipe";
import {entitiesInitialState, buildEntity} from "./state/state";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
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
  drawing: boolean;
  entities: any[];
  update: boolean;
  private subscription: Subscription;

  constructor() {
    this.drawing = false;
    this.update = false;
    this.entities = [];
    this.subject = new BehaviorSubject([]);
  }

  draw() {
    if (this.drawing) {
      this.subscription.unsubscribe();
      this.drawing = false;
      this.update = true;
      this.subscription = Observable.interval(1000).subscribe(() => {
        this.entities = this.entities.map((entity) => {
          entity.position = {lat: entity.position.lat + 0.4, long: entity.position.long + 0.4};
          return entity;
        });
        this.subject.next(this.entities);
      });
    } else {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.update = false;
      }
      this.entities = [];
      this.subject.next(this.entities);
      this.drawing = true;
      const batchCount = 1000;
      this.subscription = Observable.interval(500).subscribe(() => {
          for (let i = 0; i < batchCount; i++) {
            this.entities = [...this.entities, buildEntity()];
            this.subject.next(this.entities);
          }
        }
      )
    }

  }
}
