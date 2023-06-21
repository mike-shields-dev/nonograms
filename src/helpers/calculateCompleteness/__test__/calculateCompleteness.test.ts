import { describe, it, expect } from "vitest";
import calculateCompleteness from "../calculateCompleteness";

describe("calculateCompleteness", () => {
  it("returns the percentage of similarity between two arrays", () => {
    testCases.forEach(({ GridA, GridB, similarity }) => {
      expect(calculateCompleteness(GridA, GridB)).toEqual(similarity);
    });
  });
});

const testCases = [
  {
    GridA: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 100,
  },
  {
    GridA: [
      [true, true, true],
      [true, true, true],
      [true, true, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 89,
  },
  {
    GridA: [
      [true, true, true],
      [true, true, true],
      [true, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 78,
  },
  {
    GridA: [
      [true, true, true],
      [true, true, true],
      [false, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 67,
  },
  {
    GridA: [
      [true, true, true],
      [true, true, false],
      [false, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 56,
  },
  {
    GridA: [
      [true, true, true],
      [true, false, false],
      [false, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 44,
  },
  {
    GridA: [
      [true, true, true],
      [false, false, false],
      [false, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 33,
  },
  {
    GridA: [
      [true, true, false],
      [false, false, false],
      [false, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 22,
  },
  {
    GridA: [
      [true, false, false],
      [false, false, false],
      [false, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 11,
  },
  {
    GridA: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    GridB: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    similarity: 0,
  },
  {
    GridA: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
    ],
    GridB: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 100,
  },
  {
    GridA: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, false],
    ],
    GridB: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 94,
  },
  {
    GridA: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, false],
    ],
    GridB: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 94,
  },
  {
    GridA: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, false, false],
    ],
    GridB: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 88,
  },
  {
    GridA: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, false, false, false],
    ],
    GridB: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 81,
  },
  {
    GridA: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [false, false, false, false],
    ],
    GridB: [
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 75,
  },
];
