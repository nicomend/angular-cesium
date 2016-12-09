import {Component, Input} from '@angular/core';
import {EntityStatusToColorPipe} from "../../pipes/entity-status-to-color.pipe";

@Component({
  moduleId: module.id,
  selector: 'entity-map',
  templateUrl: 'entity-map.component.html'
})
export class EntityMapComponent{
  @Input() entity: any;
}
