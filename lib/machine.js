const makeChange = require('./makeChange.js');
const makePayment = require('./makePayment.js');
const makePurchase = require('./makePurchase.js');
const reportChange = require('./reportChange.js');
const reportInventory = require('./reportInventory.js');
const restockChange = require('./restockChange.js');
const restockInventory = require('./restockInventory.js');

class VendingMachine {
  constructor(productInventory, coinInventory) {
    // machine state
    this.productInventory = productInventory;
    this.coinInventory = coinInventory;
    this.payment = {
      2: { value: 2, stock: 0 },
      1: { value: 1, stock: 0 },
      0.25: { value: 0.25, stock: 0 },
      0.1: { value: 0.1, stock: 0 },
      0.05: { value: 0.05, stock: 0 },
    };
    // machine functions
    this.makeChange = makeChange;
    this.makePayment = makePayment;
    this.makePurchase = makePurchase;
    this.reportChange = reportChange;
    this.reportInventory = reportInventory;
    this.restockChange = restockChange;
    this.restockInventory = restockInventory;
  }
}

module.exports = new VendingMachine(
  {
    // productInventory
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
      stock: 12,
      price: 2.25,
    },
    slot04: {
      name: 'Cheeziez',
      stock: 12,
      price: 2.25,
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
  },
  {
    2: { value: 2, stock: 50 },
    1: { value: 1, stock: 50 },
    0.25: { value: 0.25, stock: 120 },
    0.1: { value: 0.1, stock: 50 },
    0.05: { value: 0.05, stock: 40 },
  },
);
