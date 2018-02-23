const makeChange = require('./makeChange.js');
const makePurchase = require('./makePurchase.js');
const reportChange = require('./reportChange.js');
const reportInventory = require('./reportInventory.js');
const restockChange = require('./restockChange.js');
const restockInventory = require('./restockInventory.js');

class VendingMachine {
  constructor(productInventory, coinInventory) {
    this.productInventory = productInventory;
    this.coinInventory = coinInventory;
    this.makeChange = makeChange;
    this.makePurchase = makePurchase;
    this.reportChange = reportChange;
    this.reportInventory = reportInventory;
    this.restockChange = restockChange;
    this.restockInventory = restockInventory;
  }
}

module.exports = new VendingMachine();
