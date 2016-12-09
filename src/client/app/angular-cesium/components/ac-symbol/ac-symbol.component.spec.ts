import {AngularCesiumSymbolComponent} from "./ac-symbol.component";
import {SymbolHolder} from "../../services/symbol.service";

export function main() {
  describe('ac-map tests', () => {
    let component: AngularCesiumSymbolComponent;
    let symbolHolder: SymbolHolder;

    beforeEach(()=> {
      symbolHolder = new SymbolHolder();
      component = new AngularCesiumSymbolComponent(symbolHolder);
    });

    describe('On init', ()=> {
      it('Should initialize the symbol holder', ()=> {
        // Arrange
        let expectedResult = {
          'object': 'object'
        };
        component.object = expectedResult;

        // Act
        component.ngOnInit();

        // Assert
        expect(symbolHolder.object).toEqual(expectedResult);
      })
    });

  });
}
