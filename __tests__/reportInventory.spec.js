const machine = require('../lib/machine.js');

describe('report product inventory', () => {
  describe('when a complete product inventory report is requested', () => {
    test('should return the current stock of all products', () => {
      expect(machine.reportInventory()).toEqual({});
    });
  });
});
