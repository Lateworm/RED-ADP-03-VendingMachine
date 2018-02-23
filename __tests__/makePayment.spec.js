const machine = require('../lib/machine.js');

describe('make change', () => {
  describe('when given a coin', () => {
    test('should return the inserted coin and the new total payment', () => {
      // each time a coin is inserted into the machine's coin slot, increment thepayment made
      expect(machine.makePayment(0.05)).toEqual([0.05, 0.05]);
    });
  });
});
