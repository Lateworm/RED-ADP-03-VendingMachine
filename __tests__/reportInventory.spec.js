const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinTwoFiddy');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('report product inventory', () => {
  describe('when a complete product inventory report is requested', () => {
    test('should return the current stock of all products', () => {
      expect(machine.reportInventory()).toEqual(productInventory);
    });
  });
});
