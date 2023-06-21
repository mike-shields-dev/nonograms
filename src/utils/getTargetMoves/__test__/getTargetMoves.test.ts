import { describe, it, expect } from "vitest";
import getTargetMoves from "../getTargetMoves";

describe("getTargetMoves", () => {
  it("should return the minimum number of moves that complete the level", () => {
    testCases.forEach(({ grid, expected }) => {
      expect(getTargetMoves(grid)).toBe(expected);
    });
  });
});

const testCases = [
  {
    grid: [],
    expected: 0,
  },
  {
    grid: [[]],
    expected: 0,
  },
  {
    grid: [[], [], []],
    expected: 0,
  },
  {
    grid: [[true]],
    expected: 1,
  },
  {
    grid: [[false]],
    expected: 2,
  },
];
