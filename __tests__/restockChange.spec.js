const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const coinInventory = require('../__mocks__/stateCoinEmpty');
const payment = require('../__mocks__/stateCoinTwoFiddy');

const restockQuantities = require('../__mocks__/stateCoinFull');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('restock coin inventory', () => {
  describe('when given an object describing coin restock quantities', () => {
    test('should return an object describing the new coin inventory', () => {
      expect(machine.restockChange(restockQuantities)).toEqual(restockQuantities);
    });
  });
});
