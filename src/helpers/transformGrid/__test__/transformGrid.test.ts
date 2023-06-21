import { describe, it, expect } from "vitest";
import transformGrid from "../transformGrid";

const testCases = [
  {
    input: [
      [true, true],
      [false, false],
    ],
    expected: [
      [true, false],
      [true, false],
    ],
  },
  {
    input: [
      [true, true, false],
      [false, false, true],
      [false, true, true],
    ],
    expected: [
      [true, false, false],
      [true, false, true],
      [false, true, true],
    ],
  },
];

describe("transformGrid", () => {
  it("returns the Grid diagonally flipped along the axis top-left to bottom-right", () => {
    testCases.forEach((testCase) => {
      expect(transformGrid(testCase.input)).toStrictEqual(testCase.expected);
    });
  });
});
