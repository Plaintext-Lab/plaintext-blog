import {describe, expect, it} from 'vitest';
import {currentYear} from './dates';

describe('currentYear', () => {
  // 20:00 UTC on 31 December is already 07:00 on 1 January in Melbourne.
  const newYearsEveUtc = new Date('2026-12-31T20:00:00Z');

  it('resolves the year in the configured time zone, not UTC', () => {
    expect(currentYear('Australia/Melbourne', newYearsEveUtc)).toBe(2027);
    expect(currentYear('UTC', newYearsEveUtc)).toBe(2026);
  });

  it('returns a number', () => {
    expect(Number.isInteger(currentYear('Australia/Melbourne'))).toBe(true);
  });
});
