import { describe, it, expect } from 'vitest';
import transformMatrix from "../transformMatrix";

const matrices = [
  [
    [true, true], 
    [false, false]
  ], 
  [
    [true, true, false], 
    [false, false, true],
    [false, true, true]
  ], 
]

const transformedMatrices = [
  [
    [true, false], 
    [true, false],
  ], 
  [
    [ true, false, false ],
    [ true, false, true ],
    [ false, true, true ]
  ], 
]

describe('transformMatrix', () => {
  it('rotates a 2d array anti-clockwise', () => {
    matrices.forEach((matrix, i) => {
      expect(transformMatrix(matrix)).toStrictEqual(transformedMatrices[i]);
    });
  });
});