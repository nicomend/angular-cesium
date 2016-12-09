import {CesiumEntityHolder} from "../entity.service";
export interface Drawer {

  addObject(options: any, entity?: CesiumEntityHolder): any;
  deleteObject(cesiumObject: any, entity?: CesiumEntityHolder): void;

}
