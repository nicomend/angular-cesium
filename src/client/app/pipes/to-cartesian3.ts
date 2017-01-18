import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'toCartesian3'})
export class ToCartesian3Pipe implements PipeTransform {
  transform(position: any): any {
    return Cesium.Cartesian3.fromDegrees(position.lat, position.long);
  }
}
