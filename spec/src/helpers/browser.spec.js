import { expect } from 'chai';
import isBrowser from '../../../src/helpers/browser';

describe('browser helper methods', () => {
  describe('isBrowser method', () => {
    it('should return false if window object is undefined', () => {
      expect(isBrowser()).to.be.false;
    });

    it('should return true if window object is not undefined', () => {
      global.window = {};
      expect(isBrowser()).to.be.true;
    });
  });
});
