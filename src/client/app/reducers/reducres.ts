import {EntitiesReducer} from "./entities.reducer";
import {ActionReducer} from "@ngrx/store";

export function buildReducersObject(): ReducersObject {
  return {
    entities: EntitiesReducer.reducer
  };
}

export function updateImmutable<T>(immutable: T, update: any): T {
  return Object.assign({}, immutable, update);
}

interface ReducersObject {
  entities: ActionReducer<any[]>
}
