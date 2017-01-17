import {Action} from "@ngrx/store";
import {updateImmutable} from "./reducres";

export const RANDOM_POSITIONS: string = 'CHANGE_POSITION';
export const SELECT_ENTITY: string = 'SELECT_ENTITY';
export const DESELECT_ENTITY: string = 'DESELECT_ENTITY';
export const ADD_ENTITY_TO_SELECTION: string = 'ADD_ENTITY_TO_SELECTION';
export const REMOVE_ENTITY_FROM_SELECTION: string = 'REMOVE_ENTITY_FROM_SELECTION';
export const HOVER_ON_ENTITY: string = 'HOVER_ON_ENTITY';
export const REMOVE_HOVER: string = 'REMOVE_HOVER';

export class EntitiesReducer {

  static reducer(state: any[], action: Action): any[] {
    switch (action.type) {
      case RANDOM_POSITIONS:
        return EntitiesReducer.randomPositions(state);
      case SELECT_ENTITY:
        return EntitiesReducer.selectEntity(state, action);
      case DESELECT_ENTITY:
        return EntitiesReducer.deselectEntity(state);
      case ADD_ENTITY_TO_SELECTION:
        return EntitiesReducer.addEntityToSelection(state, action);
      case REMOVE_ENTITY_FROM_SELECTION:
        return EntitiesReducer.removeEntityFromSelection(state, action);
      case HOVER_ON_ENTITY:
        return EntitiesReducer.hoverOnEntity(state, action);
      case REMOVE_HOVER:
        return EntitiesReducer.removeHover(state);
      default:
        return state;
    }
  }

  private static deselectEntity(state: any[]): any[] {
    return state.map((entity: any) => {
      if (entity.isSelected) {
        return updateImmutable(entity, {
          isSelected: false
        });
      }

      return entity;
    });
  };

  private static selectEntity(state: any[], action: Action) {
    return state.map((entity: any) => {
      if (entity === action.payload) {
        return updateImmutable(entity, {
          isSelected: true
        });
      }
      else if (entity.isSelected) {
        return updateImmutable(entity, {
          isSelected: false
        });
      }
      return entity;
    });
  }

  private static addEntityToSelection(state: any[], action: Action) {
    return state.map((entity: any) => {
      if (entity === action.payload) {
        return updateImmutable(entity, {
          isSelected: true
        })
      }

      return entity;
    });
  }

  private static removeEntityFromSelection(state: any[], action: Action) {
    return state.map((entity: any) => {
      if (entity === action.payload) {
        return updateImmutable(entity, {
          isSelected: false
        })
      }

      return entity;
    });
  }

  private static hoverOnEntity(state: any[], action: Action) {
    return state.map((entity: any) => {
      if (entity === action.payload) {
        return updateImmutable(entity, {
          isHovered: true
        });
      } else if (entity.isHovered) {
        return updateImmutable(entity, {
          isHovered: false
        });
      }

      return entity;
    });
  }

  private static removeHover(state: any[]) {
    return state.map((entity: any) => {
      if (entity.isHovered) {
        return updateImmutable(entity, {
          isHovered: false
        })
      }

      return entity;
    });
  }

  private static randomPositions(state: any[]) {
    return state.map((entity:any)=>{
      return updateImmutable(entity, {
        position: Cesium.Cartesian3.fromDegrees(((Math.random() * 1000) + 1), ((Math.random() * 1000) + 1))
      })
    });
  }
}


