const machine = require('../lib/machine.js');

describe('make change', () => {
  describe('when given the desired item and sufficient payment', () => {
    test('should return the change', () => {
      expect(machine.makeChange('itemSlot', 'payment')).toEqual('change');
    });
  });
});
