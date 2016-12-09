export function buildInitialState(): AppState {
  return {
    entities: entitiesInitialState(),
    selectedEntities: []
  };
}

export interface AppState {
  entities: any[];
  selectedEntities: any[];
}

function entitiesInitialState() {
  let entities: any[] = [];
  for (let i = 0; i < 500; i++) {
    entities.push({
      position: Cesium.Cartesian3.fromDegrees(((Math.random() * 1000) + 1), ((Math.random() * 1000) + 1)),
      show: true,
      point: {
        pixelSize: 20.0,
        color: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.TRANSPARENT,
        outlineWidth: 0.0
      },
      label1: {
        text: 'Label1',
        font: '14px Helvetica',
        pixelOffset: new Cesium.Cartesian2(5, 0),
        fillColor: Cesium.Color.SKYBLUE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE
      },
      label2: {
        text: 'Label2',
        font: '14px Helvetica',
        pixelOffset: new Cesium.Cartesian2(5, 15),
        fillColor: Cesium.Color.SKYBLUE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE
      }
    });
  }

  return entities;
}
