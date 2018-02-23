const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinTwoFiddy');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('make change', () => {
  describe('when given the desired item and sufficient payment', () => {
    test('should return the amount of change due', () => {
      expect(machine.makeChange('slot03')).toEqual(-0.25);
    });
  });
});
