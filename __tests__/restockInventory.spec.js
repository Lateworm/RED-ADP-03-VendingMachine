const machine = require('../lib/machine.js');
const restockQuantities = require('../__mocks__/restockInventory');

describe('restock product inventory', () => {
  describe('when given an object describing product restock quantities', () => {
    test('should return an object describing the new product inventory', () => {
      expect(machine.restockInventory(restockQuantities, machine.inventory)).toEqual({});
    });
  });
});
