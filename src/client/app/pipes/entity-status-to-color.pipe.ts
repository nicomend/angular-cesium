import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'entityStatusToColor'})
export class EntityStatusToColorPipe implements PipeTransform {
  transform(entity: any, colorType: string): any {
    if (!colorType) {
      throw 'EntityStatusToColorPipe - Color type is needed!';
    }

    if (entity.isHovered) {
      return colors.hover[colorType];
    }
    else if (entity.isSelected) {
      return colors.selected[colorType];
    }

    return colors.normal[colorType];
  }
}

const colors: any = {
  selected: {
    'cesium': Cesium.Color.RED,
    'css': 'red'
  },
  hover: {
    'cesium': Cesium.Color.YELLOW,
    'css': 'yellow'
  },
  normal: {
    'css': 'white',
    'cesium': Cesium.Color.WHITE
  }
};
