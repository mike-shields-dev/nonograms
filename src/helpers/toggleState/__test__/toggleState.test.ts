import { describe, it, expect } from "vitest";
import toggleState from "../toggleState";

describe("toggleState", () => {
  it("returns the next when passed the current state", () => {
    expect(toggleState(null)).toBe(true);
    expect(toggleState(true)).toBe(false);
    expect(toggleState(false)).toBe(null);
  });
});
