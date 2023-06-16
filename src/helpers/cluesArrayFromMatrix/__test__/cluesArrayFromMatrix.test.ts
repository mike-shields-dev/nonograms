import { describe, it, expect } from "vitest";
import cluesArrayFromMatrix from "../cluesArrayFromMatrix";

const matrices = [
  [
    [true, false],
    [true, false],
  ],
  [
    [true, false, true],
    [true, true, true],
    [false, true, false],
  ],
  [
    [true, false, true, true],
    [false, true, true, false],
    [true, true, true, false],
    [false, true, false, false],
  ],
  [
    [true, false, true, true],
    [false, true, true, false],
    [true, true, true, false],
    [false, false, false, false],
  ],
];

const hints = [
  [[1], [1]],
  [[1, 1], [3], [1]],
  [[1, 2], [2], [3], [1]],
  [[1, 2], [2], [3], []],
];

describe("cluesArrayFromMatrix", () => {
  it("returns a number representing each group of consecutive true values in a matrix row", () => {
    matrices.forEach((matrix, i) => {
      expect(cluesArrayFromMatrix(matrix)).toStrictEqual(hints[i]);
    });
  });
});
