import {OnChanges, SimpleChanges, OnDestroy, OnInit} from "@angular/core";
import {Drawer} from "../../services/core/drawer";
import {MapService} from "../../services/core/map.service";
import {CesiumEntityHolder} from "../../services/entity.service";
import {SymbolHolder} from "../../services/symbol.service";
import {AfterMapInit} from "../../services/core/after-map-init";

export abstract class AbstractMapComponent extends AfterMapInit implements OnInit, OnChanges, OnDestroy {
  protected cesiumObject: any;
  private shouldCheckChanges: boolean;

  constructor(private mapService: MapService, private drawer: Drawer, private inputs: string[], private entity?: CesiumEntityHolder, private symbolHolder?: SymbolHolder) {
    super(mapService);
  }

  ngOnInit(): void {
    this.shouldCheckChanges = false;
  }

  afterMapInit(map: any): void {
    let options = this._createOptionsObject();
    this.cesiumObject = this.drawer.addObject(options, this.entity);
    this.cesiumObject.referencedObject = this.symbolHolder ? this.symbolHolder.object : undefined;
    this.shouldCheckChanges = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.shouldCheckChanges) {
      for (let property in changes) {
        this.cesiumObject[property] = changes[property].currentValue;
      }
    }
  }

  ngOnDestroy(): void {
    this.drawer.deleteObject(this.cesiumObject, this.entity);
  }

  private _createOptionsObject(): any {
    let options: any = {};
    for (let prop of this.inputs) {
      options[prop] = (<any>this)[prop];
    }
    return options;
  }
}
