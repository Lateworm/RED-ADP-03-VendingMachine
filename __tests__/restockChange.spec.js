const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const fullCoinInventory = require('../__mocks__/stateCoinFull');
const emptyCoinInventory = require('../__mocks__/stateCoinEmpty');
const payment = require('../__mocks__/stateCoinTwoFiddy');

const restockQuantities = require('../__mocks__/stateCoinFull');

const fullMachine = new VendingMachine(productInventory, fullCoinInventory, payment);
const emptyMachine = new VendingMachine(productInventory, emptyCoinInventory, payment);

describe('restock coin inventory', () => {
  describe('when an empty machine is given a fresh float', () => {
    test('should return an object describing the new coin inventory', () => {
      expect(emptyMachine.restockChange(restockQuantities)).toEqual(restockQuantities);
    });
  });

  describe('when given payment for a snack', () => {
    test('should return an object describing the new coin inventory', () => {
      expect(fullMachine.restockChange(payment)).toEqual({
        2: { value: 2, stock: 51 },
        1: { value: 1, stock: 50 },
        0.25: { value: 0.25, stock: 122 },
        0.1: { value: 0.1, stock: 50 },
        0.05: { value: 0.05, stock: 40 },
      });
    });
  });

  describe('when given payment for a snack', () => {
    test("should add the coins from the payment to the machine's coin inventory", () => {
      expect(fullMachine.coinInventory).toEqual({
        2: { value: 2, stock: 51 },
        1: { value: 1, stock: 50 },
        0.25: { value: 0.25, stock: 122 },
        0.1: { value: 0.1, stock: 50 },
        0.05: { value: 0.05, stock: 40 },
      });
    });
  });
});
