const machine = require('../lib/machine.js');

describe('make a purchase', () => {
  describe('when given the desired item and sufficient payment', () => {
    test('should return a receipt for the transaction', () => {
      expect(machine.makePurchase('itemSlot', 'payment')).toEqual(['itemSlot', 'payment']);
    });
  });
});
