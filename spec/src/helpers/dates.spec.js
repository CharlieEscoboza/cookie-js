import { expect } from 'chai';
import parseDate, { __internals__ } from '../../../src/helpers/dates';

const { parseTimeToMilliseconds } = __internals__;
const MIN_TO_MILLISECONDS = 60 * 1000;

describe('date helper methods', () => {
  describe('parseTimeToMilliseconds internal method', () => {
    it('should return null if passed date is NaN', () => {
      const result = parseTimeToMilliseconds('hello');
      expect(result).to.be.null;
    });

    it('should return the equivalent time in millisenconds for a single minute', () => {
      const result = parseTimeToMilliseconds('1 min');
      expect(result).to.eql(MIN_TO_MILLISECONDS);
    });

    it('should return the equivalent time in millisenconds for 10 minutes', () => {
      const result = parseTimeToMilliseconds('10 mins');
      expect(result).to.eql(MIN_TO_MILLISECONDS * 10);
    });

    it('should return the equivalent time in millisenconds for minutes if not unit time is passed', () => {
      const result = parseTimeToMilliseconds('10');
      expect(result).to.eql(MIN_TO_MILLISECONDS * 10);
    });

    it('should return the equivalent time in millisenconds for a single hour', () => {
      const result = parseTimeToMilliseconds('1 hour');
      expect(result).to.eql(MIN_TO_MILLISECONDS * 60);
    });

    it('should return the equivalent time in millisenconds for 10 hours', () => {
      const result = parseTimeToMilliseconds('10 hours');
      expect(result).to.eql(MIN_TO_MILLISECONDS * 60 * 10);
    });

    it('should return the equivalent time in millisenconds for a single day', () => {
      const result = parseTimeToMilliseconds('1 day');
      expect(result).to.eql(MIN_TO_MILLISECONDS * 60 * 24);
    });

    it('should return the equivalent time in millisenconds for 10 days', () => {
      const result = parseTimeToMilliseconds('10 days');
      expect(result).to.eql(MIN_TO_MILLISECONDS * 60 * 24 * 10);
    });
  });

  describe('parseDate public method', () => {
    // Note (c.e. 2017-07-23) : Since the public method only checks the type of data
    // you're providing before passing it to the internal `parseTimeToMilliseconds` method.
    // I'll just cover that data checking here and skip the parse time since is tested above.
    it('should return null if date provided is not a string', () => {
      const result = parseDate(5);
      expect(result).to.be.null;
    });

    it('should not return null if date provided is a string', () => {
      const result = parseDate('5');
      expect(result).to.not.be.null;
    });
  });
});
