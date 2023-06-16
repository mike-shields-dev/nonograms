import { describe, it, expect } from "vitest";
import cluesArrayFromMatrix from "../cluesArrayFromMatrix";

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

describe("cluesArrayFromMatrix", () => {
  it("returns a number for each group of consecutive true values in a matrix row", () => {
    testCases.forEach((testCase) => {
      expect(cluesArrayFromMatrix(testCase.input)).toStrictEqual(
        testCase.expected
      );
    });
  });
});
