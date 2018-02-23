const machine = require('../lib/machine.js');

describe('report coin inventory', () => {
  describe('when a complete change inventory report is requested', () => {
    test('should return the current stock of all coins', () => {
      expect(machine.reportChange()).toEqual({});
    });
  });
});
