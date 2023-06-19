import { describe, it, expect } from "vitest";
import freshUserMatrix from "../freshUserMatrix";

describe("freshUserMatrix", () => {
  it("returns a square matrix filled with null values based on the provided resolution", () => {
    testCases.forEach(({ input, expected }) => {
      expect(freshUserMatrix(input)).toStrictEqual(expected);
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
