import { describe, it, expect } from "vitest";
import switchState from "../toggleState";

describe('switchState', () => {
  it('returns the next when passed the current state', () => {
    expect(switchState(null)).toBe(true);
    expect(switchState(true)).toBe(false);
    expect(switchState(false)).toBe(null);
  });
});