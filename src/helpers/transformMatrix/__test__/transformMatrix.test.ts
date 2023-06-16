import { describe, it, expect } from 'vitest';
import transformMatrix from "../transformMatrix";

const testCases = [
  {
    input: [
      [true, true], 
      [false, false]
    ], 
    expected: [
      [true, false], 
      [true, false],
    ]
  }, 
  {
    input: [
      [true, true, false], 
      [false, false, true],
      [false, true, true]
    ],
    expected: [
      [ true, false, false ],
      [ true, false, true ],
      [ false, true, true ]
    ]
  },
];

describe('transformMatrix', () => {
  it('returns the matrix diagonally flipped along the axis top-left to bottom-right', () => {
    testCases.forEach((testCase) => {
      expect(transformMatrix(testCase.input)).toStrictEqual(testCase.expected);
    });
  });
});