const VendingMachine = require('../lib/machine.js');
const productInventory = require('../__mocks__/stateInventoryFull');
const coinInventory = require('../__mocks__/stateCoinFull');
const payment = require('../__mocks__/stateCoinTwoFiddy');
const zeroPayment = require('../__mocks__/stateCoinEmpty');

const machine = new VendingMachine(productInventory, coinInventory, payment);

describe('make a purchase', () => {
  describe('when given an item and sufficient payment', () => {
    test('should decrement inventory of the product', () => {
      machine.makePurchase('slot03');
      expect(machine.productInventory).toEqual({
        slot01: {
          name: 'Cola',
          stock: 20,
          price: 1.75,
        },
        slot02: {
          name: 'Iced Tea',
          stock: 20,
          price: 1.75,
        },
        slot03: {
          name: 'Crisps',
          stock: 11,
          price: 2.25,
        },
        slot04: {
          name: 'Cheeziez',
          stock: 12,
          price: 2.5,
        },
        slot05: {
          name: 'Vegan Gluten-Free Low-Carb Bullshit',
          stock: 12,
          price: 4.25,
        },
        slot06: {
          name: 'Milk Chocolate Candy Bar',
          stock: 50,
          price: 1.5,
        },
        slot07: {
          name: 'Nougat Candy Bar',
          stock: 50,
          price: 2,
        },
        slot08: {
          name: 'Peanut Butter Candy Bar',
          stock: 50,
          price: 2,
        },
      });
    });
  });

  describe('when given an item and sufficient payment', () => {
    test("should add the coins from the payment to the machine's coin inventory", () => {
      expect(machine.coinInventory).toEqual({
        2: { value: 2, stock: 51 },
        1: { value: 1, stock: 50 },
        0.25: { value: 0.25, stock: 122 },
        0.1: { value: 0.1, stock: 50 },
        0.05: { value: 0.05, stock: 40 },
      });
    });
  });

  describe('when given an item and sufficient payment', () => {
    test('should reset the payment state', () => {
      expect(machine.payment).toEqual(zeroPayment);
    });
  });
});
