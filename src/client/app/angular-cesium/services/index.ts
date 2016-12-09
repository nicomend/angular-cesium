import {MapService} from "./core/map.service";
import {BillboardsService} from "./drawers/primitives/billboards.service";
import {EntitiesService} from "./drawers/primitives/entities.service";
import {LabelsService} from "./drawers/primitives/labels.service";
import {PointsService} from "./drawers/primitives/points.service";
import {PolylinesService} from "./drawers/primitives/polylines.service";
import {PointsGraphicsService} from "./drawers/graphics/points-graphics.service";
import {LabelsGraphicsService} from "./drawers/graphics/labels-graphics.service";
import {BillboardsGraphicsService} from "./drawers/graphics/billboards-graphics.service";
import {PolylinesGraphicsService} from "./drawers/graphics/polyline-graphics.service";
import {PolygonsGraphicsService} from "./drawers/graphics/polygons-graphics.service";
import {WmsImageryProviderService} from "./drawers/imagery/wms-imagery-provider-service";
import {GoogleEarthImageryProviderService} from "./drawers/imagery/google-earth-imagery-provider-service";
export const MAP_PROVIDERS = [
  MapService,
  BillboardsService,
  EntitiesService,
  LabelsService,
  PointsService,
  PolylinesService,
  PointsGraphicsService,
  LabelsGraphicsService,
  BillboardsGraphicsService,
  PolylinesGraphicsService,
  PolygonsGraphicsService,
  WmsImageryProviderService,
  GoogleEarthImageryProviderService
];
