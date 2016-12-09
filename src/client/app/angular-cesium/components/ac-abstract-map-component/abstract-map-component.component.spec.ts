import {AbstractMapComponent} from "./abstract-map-component.component";
import {MapService} from "../../services/core/map.service";
import {Drawer} from "../../services/core/drawer";
import {CesiumEntityHolder} from "../../services/entity.service";
import {SymbolHolder} from "../../services/symbol.service";
import {SimpleChange, SimpleChanges} from "@angular/core";
export function main() {
  const inputs = ['input1', 'input2'];
  const values = ['value1', 'value2'];

  let symbolHolder = new SymbolHolder();
  symbolHolder.object = {};

  describe('Abstract map component', ()=> {
    let component: AbstractMapComponent;
    let mapService: MapService;
    let cesiumViewerMock: any;
    let drawer: Drawer;

    beforeEach(()=> {
      cesiumViewerMock = {};
      mapService = new MapService();
      drawer = new TestDrawer();
    });

    describe('Without entity and symbol holders', () => {

      beforeEach(()=> {
        component = new TestAbstract(mapService, drawer, inputs);
        component[inputs[0]] = values[0];
        component[inputs[1]] = values[1];
        component.ngOnInit();
      });

      it('Should initialize check changes to false', () => {
        // Assert
        expect(component['shouldCheckChanges']).toEqual(false);
      });

      describe('afterMapInit tests', ()=> {

        beforeEach(()=> {
          // Arrange
          spyOn(drawer, 'addObject').and.callThrough();
          component.afterMapInit(cesiumViewerMock);
        });

        it('Should change check changes to true', () => {
          // Assert
          expect(component['shouldCheckChanges']).toEqual(true);
        });

        it('Should create the object with the given inputs', () => {
          // Arrange
          let cesiumObject = {referencedObject: undefined};
          cesiumObject[inputs[0]] = values[0];
          cesiumObject[inputs[1]] = values[1];

          // Act
          component.afterMapInit(cesiumViewerMock);

          // Assert
          expect(component['cesiumObject']).toEqual(cesiumObject);
        });

        it('Should call to drawer.deleteObject', () => {
          // Arrange
          let cesiumObject = {referencedObject: undefined};
          cesiumObject[inputs[0]] = values[0];
          cesiumObject[inputs[1]] = values[1];
          spyOn(drawer, 'deleteObject');

          // Act
          component.ngOnDestroy();

          // Assert
          expect(drawer.deleteObject).toHaveBeenCalledWith(cesiumObject, undefined);
        });

        it('Should call to drawer.addObject', () => {
          // Arrange
          let cesiumObject = {referencedObject: undefined};
          cesiumObject[inputs[0]] = values[0];
          cesiumObject[inputs[1]] = values[1];

          // Assert
          expect(drawer.addObject).toHaveBeenCalledWith(cesiumObject, undefined);
        });

        it('Should update the cesiumObject', () => {
          // Arrange
          let changesObject: SimpleChanges = {};
          changesObject[inputs[0]] = new SimpleChange(values[0], values[1]);

          // Act
          component.ngOnChanges(changesObject);

          // Assert
          expect(component['cesiumObject'][inputs[0]]).toEqual(values[1]);
        });

        it('Should not update the cesiumObject', () => {
          // Arrange
          component['shouldCheckChanges'] = false;
          let changesObject: SimpleChanges = {};
          changesObject[inputs[0]] = new SimpleChange(values[0], values[1]);

          // Act
          component.ngOnChanges(changesObject);

          // Assert
          expect(component['cesiumObject'][inputs[0]]).toEqual(values[0]);
        });

      });

    });

    describe('Cesium entity holder', ()=> {
      let cesiumEntityHolder: CesiumEntityHolder;
      cesiumEntityHolder = new CesiumEntityHolder();
      cesiumEntityHolder.setCesiumObject({'object': 'object'});

      let cesiumObject = {referencedObject: undefined};
      cesiumObject[inputs[0]] = values[0];
      cesiumObject[inputs[1]] = values[1];

      beforeEach(()=> {
        component = new TestAbstract(mapService, drawer, inputs, cesiumEntityHolder);
        component[inputs[0]] = values[0];
        component[inputs[1]] = values[1];
        component.ngOnInit();
        spyOn(drawer, 'addObject').and.callThrough();
        component.afterMapInit(cesiumViewerMock);
      });

      it('Should call to drawer.deleteObject', () => {
        // Arrange
        spyOn(drawer, 'deleteObject');

        // Act
        component.ngOnDestroy();

        // Assert
        expect(drawer.deleteObject).toHaveBeenCalledWith(cesiumObject, cesiumEntityHolder);
      });

      it('Should call to drawer.addObject', () => {
        // Assert
        expect(drawer.addObject).toHaveBeenCalledWith(cesiumObject, cesiumEntityHolder);
      });
    });

    describe('Symbol holder', ()=> {
      let symbolHolder = new SymbolHolder();
      symbolHolder.object = {'object': 'object'};

      let cesiumObject = {referencedObject: symbolHolder.object};
      cesiumObject[inputs[0]] = values[0];
      cesiumObject[inputs[1]] = values[1];

      beforeEach(()=> {
        component = new TestAbstract(mapService, drawer, inputs, undefined, symbolHolder);
        component[inputs[0]] = values[0];
        component[inputs[1]] = values[1];
        component.ngOnInit();
        spyOn(drawer, 'addObject').and.callThrough();
        component.afterMapInit(cesiumViewerMock);
      });

      it('Should create the object with the given inputs', () => {
        // Act
        component.afterMapInit(cesiumViewerMock);

        // Assert
        expect(component['cesiumObject']).toEqual(cesiumObject);
      });

      it('Should call to drawer.deleteObject', () => {
        // Arrange
        spyOn(drawer, 'deleteObject');

        // Act
        component.ngOnDestroy();

        // Assert
        expect(drawer.deleteObject).toHaveBeenCalledWith(cesiumObject, undefined);
      });

      it('Should call to drawer.addObject', () => {
        // Assert
        expect(drawer.addObject).toHaveBeenCalledWith(cesiumObject, undefined);
      });
    });

  });
}

class TestAbstract extends AbstractMapComponent {
  constructor(mapService: MapService, drawer: Drawer, inputs: string[], entity?: CesiumEntityHolder, private symbolHolder?: SymbolHolder) {
    super(mapService, drawer, inputs, entity, symbolHolder);
  }
}

class TestDrawer implements Drawer {
  addObject(options: any, entity?: CesiumEntityHolder): any {
    return options;
  }

  deleteObject(cesiumObject: any, entity?: CesiumEntityHolder): void {
  }

}
