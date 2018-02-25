module.exports = function restockChange(restockQuantities) {
  const currentInventory = this.coinInventory;
  Object.values(restockQuantities).forEach((coin) => {
    currentInventory[coin.value].stock += coin.stock;
  });

  return this.coinInventory;
};
