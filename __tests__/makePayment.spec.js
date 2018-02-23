const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinDollaFiddy');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('make change', () => {
  describe('when given a coin', () => {
    test('should return receipt of the inserted coin and the new total payment', () => {
      // each time a coin is inserted into the machine's coin slot, increment thepayment made
      expect(machine.makePayment(0.1)).toEqual([0.1, 1.6]);
    });
  });
});
