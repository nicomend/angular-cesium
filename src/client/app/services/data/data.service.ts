import {Injectable} from '@angular/core';
import {
  SELECT_ENTITY, DESELECT_ENTITY, REMOVE_ENTITY_FROM_SELECTION,
  ADD_ENTITY_TO_SELECTION, HOVER_ON_ENTITY, REMOVE_HOVER
} from "../../reducers/entities.reducer";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/state";

@Injectable()
export class DataService {
  constructor(private store: Store<AppState>) {
  }

  toggleEntitySelection(entity: any) {
    if (entity.isSelected) {
      this.store.dispatch({type: DESELECT_ENTITY, payload: entity})
    }
    else {
      this.store.dispatch({type: SELECT_ENTITY, payload: entity})
    }
  }

  addEntityToSelection(entity: any) {
    if (entity.isSelected) {
      this.store.dispatch({type: REMOVE_ENTITY_FROM_SELECTION, payload: entity})
    }
    else {
      this.store.dispatch({type: ADD_ENTITY_TO_SELECTION, payload: entity})
    }
  }

  hoverOnEntity(entity: any) {
    if (!entity.isHovered) {
      this.store.dispatch({type: HOVER_ON_ENTITY, payload: entity});
    }
  }

  removeHover() {
    this.store.dispatch({type: REMOVE_HOVER});
  }
}
