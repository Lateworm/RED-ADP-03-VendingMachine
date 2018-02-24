const changeCoinsDue = require('../__mocks__/stateCoinEmpty');

module.exports = function makeChange(itemSlot) {
  const itemPrice = this.productInventory[itemSlot].price;

  const paymentBreakdown = this.payment;
  function coinSubTotal(coinValue) {
    return paymentBreakdown[coinValue].stock * paymentBreakdown[coinValue].value;
  }
  const amountPaid =
    coinSubTotal(2) + coinSubTotal(1) + coinSubTotal(0.25) + coinSubTotal(0.1) + coinSubTotal(0.05);

  let changeAmountDue = itemPrice - amountPaid;

  // console.log(
  //   'itemPrice =',
  //   itemPrice,
  //   'amountPaid =',
  //   amountPaid,
  //   'changeAmountDue =',
  //   changeAmountDue,
  // );

  // define some variables so they'll be in scope of checkChange and checkOweing
  const machineCoinInventory = this.coinInventory;

  // check each coin to see if it fits into the change
  function checkChange(value) {
    if (Math.abs(changeAmountDue) >= machineCoinInventory[value].value) {
      changeCoinsDue[value].stock = Math.floor(changeAmountDue / machineCoinInventory[value].value);
      changeAmountDue -=
        machineCoinInventory[value].value *
        Math.floor(changeAmountDue / machineCoinInventory[value].value);
    } else {
      changeCoinsDue[value].stock = 0;
    }
  }
  // conditionally build an object of change
  if (changeAmountDue < 0) {
    checkChange(2);
    checkChange(1);
    checkChange(0.25);
    checkChange(0.1);
    checkChange(0.05);
  }

  // check each coin to see if it fits into the amount oweing
  function checkOweing(value) {
    if (changeAmountDue >= machineCoinInventory[value].value) {
      changeCoinsDue[value].stock = Math.floor(changeAmountDue / machineCoinInventory[value].value);
      changeAmountDue -=
        machineCoinInventory[value].value *
        Math.floor(changeAmountDue / machineCoinInventory[value].value);
    } else {
      changeCoinsDue[value].stock = 0;
    }
  }
  // conditionally build an object of amounts oweing
  if (changeAmountDue > 0) {
    checkOweing(2);
    checkOweing(1);
    checkOweing(0.25);
    checkOweing(0.1);
    checkOweing(0.05);
  }

  if (!this.productInventory[itemSlot].stock) {
    return this.payment;
  }
  if (itemPrice === amountPaid) {
    return 'No change due';
  }
  return changeCoinsDue;
};
