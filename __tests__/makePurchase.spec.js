const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinTwoFiddy');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('make a purchase', () => {
  describe('when given an item and sufficient payment', () => {
    test('should return a receipt for the transaction', () => {
      expect(machine.makePurchase('slot03')).toEqual(-0.25);
    });
  });

  // TODO: Test that after the purchase is complete, the current payment is reset
});
