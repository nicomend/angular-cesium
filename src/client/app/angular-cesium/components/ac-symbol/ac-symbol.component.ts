import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {SymbolHolder} from "../../services/symbol.service";
import {MapService} from "../../services/core/map.service";

@Component({
  moduleId: module.id,
  selector: 'ac-symbol',
  template: ``,
  providers: [SymbolHolder]
})
export class AngularCesiumSymbolComponent implements OnInit {
  @Input()
  object: any;

  constructor(private symbolHolder: SymbolHolder) {}

  ngOnInit(): void {
    this.symbolHolder.object = this.object;
  }
}
