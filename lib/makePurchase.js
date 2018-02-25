const zeroPayment = require('../__mocks__/stateCoinEmpty');

module.exports = function makePurchase(itemSlot) {
  this.productInventory[itemSlot].stock -= 1;
  this.restockChange(this.payment);
  this.payment = zeroPayment;

  // call makeChange!! test it?

  // return [this.productInventory[itemSlot], this.payment];
};
