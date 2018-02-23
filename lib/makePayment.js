module.exports = function makePayment(coin) {
  this.payment = this.payment + coin;
  return [coin, this.payment];
};
