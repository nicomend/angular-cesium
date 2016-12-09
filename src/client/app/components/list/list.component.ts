import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/state";

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  entities: Observable<any>;

  constructor(private dataService: DataService, private store: Store<AppState>) {
    this.entities = store.select((state: AppState)=> {
      return {
        selected: state.entities.filter(value=> value.isSelected),
        count: state.entities.length
      }
    });
  }

  entityClick(entity: any) {
    this.dataService.toggleEntitySelection(entity);
  }

  entityHover(entity: any) {
    this.dataService.hoverOnEntity(entity);
  }

  removeHover() {
    this.dataService.removeHover();
  }
}
