const machine = require('../lib/machine.js');

describe('make change', () => {
  describe('when given a coin', () => {
    test('should return the inserted coin, and the new total payment', () => {
      expect(machine.makePayment('coin')).toEqual('coin');
    });
  });
});
