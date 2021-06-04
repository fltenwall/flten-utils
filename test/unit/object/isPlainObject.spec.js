import isPlainObject from '../../../src/object/isPlainObject';
import expect from 'expect';

describe('Utils', () => {
  describe('isPlainObject', () => {
    it('should return true only if plain object', () => {
      function Test() {}

      expect(isPlainObject(new Test())).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
      expect(isPlainObject([1, 2, 3])).toBe(false);
      expect(isPlainObject(null)).toBe(false);
      expect(isPlainObject()).toBe(false);
      expect(isPlainObject({ 'x': 1, 'y': 2 })).toBe(true);
    });
  });
});
