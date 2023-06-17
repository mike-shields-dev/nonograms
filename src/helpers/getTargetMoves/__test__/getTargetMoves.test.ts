import { describe, it, expect } from "vitest";
import getTargetMoves from "../getTargetMoves";

describe("getTargetMoves", () => {
  it("should return the minimum number of moves that complete the level", () => {
    testCases.forEach(({ matrix, expected }) => {
      expect(getTargetMoves(matrix)).toBe(expected);
    });
  });
});

const testCases = [
  {
    matrix: [[true]],
    expected: 1,
  },
];
