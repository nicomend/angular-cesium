import {GraphicsDrawer} from "../../core/graphics-drawer";
import {Injectable} from "@angular/core";

@Injectable()
export class PointsGraphicsService extends GraphicsDrawer {
  protected getType(): string {
    return 'point';
  }
}
