import {MapService} from "./map.service";

export abstract class AfterMapInit {
  constructor(mapService: MapService) {
    mapService.getMap().then(this.afterMapInit.bind(this));
  }

  abstract afterMapInit(map: any): void;
}
