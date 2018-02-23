module.exports = function makePayment(coin) {
  this.payment[coin].stock = this.payment[coin].stock + 1;

  const paymentBreakdown = this.payment;
  function coinSubTotal(coinValue) {
    return paymentBreakdown[coinValue].stock * paymentBreakdown[coinValue].value;
  }

  const totalPayment =
    coinSubTotal(2) + coinSubTotal(1) + coinSubTotal(0.25) + coinSubTotal(0.1) + coinSubTotal(0.05);

  return [coin, totalPayment];
};
