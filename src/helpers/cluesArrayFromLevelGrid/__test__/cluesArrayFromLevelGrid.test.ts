import { describe, it, expect } from "vitest";
import cluesArrayFromLevelGrid from "../cluesArrayFromLevelGrid";

const testCases = [
  {
    input: [
      [true, false],
      [true, false],
    ],

    expected: [[1], [1]],
  },
  {
    input: [
      [true, false, true],
      [true, true, true],
      [false, true, false],
    ],

    expected: [[1, 1], [3], [1]],
  },
  {
    input: [
      [true, false, true, true],
      [false, true, true, false],
      [true, true, true, false],
      [false, true, false, false],
    ],

    expected: [[1, 2], [2], [3], [1]],
  },
  {
    input: [
      [true, false, true, true],
      [false, true, true, false],
      [true, true, true, false],
      [false, false, false, false],
    ],

    expected: [[1, 2], [2], [3], []],
  },
];

describe("cluesArrayFromLevelGrid", () => {
  it("returns a number for each group of consecutive true values in a Grid row", () => {
    testCases.forEach((testCase) => {
      expect(cluesArrayFromLevelGrid(testCase.input)).toStrictEqual(
        testCase.expected
      );
    });
  });
});
