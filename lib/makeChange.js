module.exports = function makeChange(itemSlot) {
  const amountDue = this.productInventory[itemSlot].price;

  const paymentBreakdown = this.payment;
  function coinSubTotal(coinValue) {
    return paymentBreakdown[coinValue].stock * paymentBreakdown[coinValue].value;
  }
  const amountPaid =
    coinSubTotal(2) + coinSubTotal(1) + coinSubTotal(0.25) + coinSubTotal(0.1) + coinSubTotal(0.05);

  const changeDue = amountDue - amountPaid;

  return changeDue;
};
