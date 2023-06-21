import { describe, it, expect } from "vitest";
import freshUserGrid from "../freshUserGrid";

describe("freshUserGrid", () => {
  it("returns a square Grid filled with null values based on the provided resolution", () => {
    testCases.forEach(({ input, expected }) => {
      expect(freshUserGrid(input)).toStrictEqual(expected);
    });
  });
});

const testCases = [
  {
    input: 1,
    expected: [[null]],
  },
  {
    input: 2,
    expected: [
      [null, null],
      [null, null],
    ],
  },
  {
    input: 3,
    expected: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  },
  {
    input: 4,
    expected: [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ],
  },
];
