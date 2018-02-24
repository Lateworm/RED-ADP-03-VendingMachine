const VendingMachine = require('../lib/machine.js');
const fullProductInventory = require('../__mocks__/stateInventoryFull');
const emptyProductInventory = require('../__mocks__/stateInventoryEmpty');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinTwoFiddy');

const fullMachine = new VendingMachine(fullProductInventory, coinInventory, payment);
const emptyMachine = new VendingMachine(emptyProductInventory, coinInventory, payment);

describe('make change', () => {
  describe('when given an item while payment is more than sufficient', () => {
    test('should return the amount of change due', () => {
      expect(fullMachine.makeChange('slot03')).toEqual({
        2: { value: 2, stock: 0 },
        1: { value: 1, stock: 0 },
        0.25: { value: 0.25, stock: -1 },
        0.1: { value: 0.1, stock: 0 },
        0.05: { value: 0.05, stock: 0 },
      });
    });
  });

  describe('when given an item while payment is exactly sufficient', () => {
    test('should return 0', () => {
      expect(fullMachine.makeChange('slot04')).toEqual('No change due');
    });
  });

  describe('when given an item while payment is insufficient', () => {
    test('should return the amount of payment still oweing', () => {
      expect(fullMachine.makeChange('slot05')).toEqual({
        2: { value: 2, stock: 0 },
        1: { value: 1, stock: 1 },
        0.25: { value: 0.25, stock: 3 },
        0.1: { value: 0.1, stock: 0 },
        0.05: { value: 0.05, stock: 0 },
      });
    });
  });

  describe('when given an item that is out of stock', () => {
    test('should return the payment', () => {
      expect(emptyMachine.makeChange('slot03')).toEqual(payment);
    });
  });
});
