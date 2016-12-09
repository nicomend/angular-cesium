import {Drawer} from "./drawer";
import {CesiumEntityHolder} from "../entity.service";

export abstract class GraphicsDrawer implements Drawer {
  addObject(options: any, entity?: CesiumEntityHolder): any {
    entity.cesiumObject[this.getType()] = options;
    return options;
  }

  deleteObject(cesiumObject: any, entity?: CesiumEntityHolder): void {
    entity.cesiumObject[this.getType()] = undefined;
  }

  protected abstract getType(): string;
}
