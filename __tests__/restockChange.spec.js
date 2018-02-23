const machine = require('../lib/machine.js');
const restockQuantities = require('../__mocks__/restockChange');

describe('restock coin inventory', () => {
  describe('when given an object describing coin restock quantities', () => {
    test('should return an object describing the new coin inventory', () => {
      expect(machine.restockChange(restockQuantities, machine.change)).toEqual({});
    });
  });
});
