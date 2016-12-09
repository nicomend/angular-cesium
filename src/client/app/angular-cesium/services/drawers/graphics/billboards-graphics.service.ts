import {GraphicsDrawer} from "../../core/graphics-drawer";
import {Injectable} from "@angular/core";

@Injectable()
export class BillboardsGraphicsService extends GraphicsDrawer{
  protected getType(): string {
    return 'billboard';
  }
}
