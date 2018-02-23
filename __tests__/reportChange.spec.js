const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinEmpty');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('report coin inventory', () => {
  describe('when a complete change inventory report is requested', () => {
    test('should return the current stock of all coins', () => {
      expect(machine.reportChange()).toEqual(coinInventory);
    });
  });
});
