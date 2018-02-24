module.exports = function restockInventory(restockQuantities) {
  const currentInventory = this.productInventory;

  Object.entries(restockQuantities).forEach((product) => {
    currentInventory[product[0]].stock += product[1].stock;
  });

  return this.productInventory;
};
