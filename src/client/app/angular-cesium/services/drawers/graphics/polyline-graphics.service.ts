import {GraphicsDrawer} from "../../core/graphics-drawer";
export class PolylinesGraphicsService extends GraphicsDrawer {
  protected getType(): string {
    return 'polyline';
  }
}
