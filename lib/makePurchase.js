module.exports = function makePurchase(itemSlot) {
  this.productInventory[itemSlot].stock = this.productInventory[itemSlot].stock - 1;

  const paymentBreakdown = this.payment;
  function coinSubTotal(coinValue) {
    return paymentBreakdown[coinValue].stock * paymentBreakdown[coinValue].value;
  }
  const amountPaid =
    coinSubTotal(2) + coinSubTotal(1) + coinSubTotal(0.25) + coinSubTotal(0.1) + coinSubTotal(0.05);

  const changeDue = this.productInventory[itemSlot].price - amountPaid;

  return changeDue;
};
