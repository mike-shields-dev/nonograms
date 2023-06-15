import { describe, it, expect } from "vitest";
import hintsFromMatrix from "../hintsFromMatrix";

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

describe("hintsFromMatrix", () => {
  it("returns a number representing each group of consecutive true values in a matrix row", () => {
    matrices.forEach((matrix, i) => {
      expect(hintsFromMatrix(matrix)).toStrictEqual(hints[i]);
    });
  });
});
