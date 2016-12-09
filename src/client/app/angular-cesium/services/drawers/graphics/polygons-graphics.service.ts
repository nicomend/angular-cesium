import {GraphicsDrawer} from "../../core/graphics-drawer";
export class PolygonsGraphicsService extends GraphicsDrawer {
  protected getType(): string {
    return 'polygon';
  }
}
