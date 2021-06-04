import repeatStr from '../../../src/string/repeatStr'
import expect from 'expect';

describe('Utils', () => {
  describe('repeatStr', () => {
    it('should return a repect string', () => {
      expect(repeatStr('',-1)).toBe('');
      expect(repeatStr('a',3)).toBe('aaa');
    });
  });
});