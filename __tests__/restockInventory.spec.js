const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryEmpty');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinEmpty');

const restockQuantities = require('../__mocks__/stateInventoryFull');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('restock product inventory', () => {
  describe('when given an object describing product restock quantities', () => {
    test('should return an object describing the new product inventory', () => {
      expect(machine.restockInventory(restockQuantities)).toEqual(restockQuantities);
    });
  });
});
