import {
  Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, Input, OnChanges,
  SimpleChanges
} from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Subject, Observable} from "rxjs";
import {MapEventData} from "../../angular-cesium/services/core/map.service";
import {AppState} from "../../state/state";
import {Store} from "@ngrx/store";
import {RANDOM_POSITIONS} from "../../reducers/entities.reducer";

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changessss');
  }
  @Input() entities: any[];
  showWms: boolean;

  constructor(private dataService: DataService, private store: Store<AppState>) {
    // this.entities = store.select((state: AppState) => state.entities);
    //
    // Observable.interval(500).subscribe(() => {
    //   store.dispatch({type: RANDOM_POSITIONS});
    // });
  }

  ngOnInit(): void {
    this.showWms = true;
  }

  leftClick(event: MapEventData): void {
    this.showWms = !this.showWms;
    if (event.pickedObjects) {
      let entities = this._pickedObjectsToEntities(event.pickedObjects);

      for (let entity of entities) {
        this.dataService.toggleEntitySelection(entity);
      }
    }
  }

  ctrlLeftClick(event: MapEventData): void {
    if (event.pickedObjects) {
      let entities = this._pickedObjectsToEntities(event.pickedObjects);

      for (let entity of entities) {
        this.dataService.addEntityToSelection(entity);
      }
    }
  }

  mouseMove(event: MapEventData): void {
    if (event.pickedObjects) {
      let entities = this._pickedObjectsToEntities(event.pickedObjects);

      for (let entity of entities) {
        this.dataService.hoverOnEntity(entity);
      }
    }
    else {
      this.dataService.removeHover();
    }
  }

  private _pickedObjectsToEntities(pickedObjects: any[]): any[] {
    let entities = new Set();
    for (let pickedObject of pickedObjects) {
      let entity = pickedObject.primitive.referencedObject;
      if (!entities.has(entity)) {
        entities.add(entity);
      }
    }

    return Array.from(entities);
  }
}
