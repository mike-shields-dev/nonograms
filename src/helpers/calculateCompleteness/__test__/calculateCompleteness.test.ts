import { describe, it, expect} from 'vitest';
import calculateCompleteness from '../calculateCompleteness';



describe('calculateCompleteness', () => {
  it('returns the percentage of similarity between two arrays', () => {
    testCases.forEach(({matrixA, matrixB, similarity}) => {
      expect(calculateCompleteness(matrixA, matrixB)).toEqual(similarity);
    })
  });
});

const testCases = [
  {
    matrixA: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 100,
  }, 
  {
    matrixA: [
      [true, true, true], 
      [true, true, true], 
      [true, true, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 89,
  },
  {
    matrixA: [
      [true, true, true], 
      [true, true, true], 
      [true, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 78,
  },
  {
    matrixA: [
      [true, true, true], 
      [true, true, true], 
      [false, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 67,
  },
  {
    matrixA: [
      [true, true, true], 
      [true, true, false], 
      [false, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 56,
  },
  {
    matrixA: [
      [true, true, true], 
      [true, false, false], 
      [false, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 44,
  },
  {
    matrixA: [
      [true, true, true], 
      [false, false, false], 
      [false, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 33,
  },
  {
    matrixA: [
      [true, true, false], 
      [false, false, false], 
      [false, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 22,
  },
  {
    matrixA: [
      [true, false, false], 
      [false, false, false], 
      [false, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 11,
  },
  {
    matrixA: [
      [false, false, false], 
      [false, false, false], 
      [false, false, false],
    ],
    matrixB: [
      [true, true, true], 
      [true, true, true], 
      [true, true, true],
    ],
    similarity: 0,
  },
  {
    matrixA: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, true],
    ],
    matrixB: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 100,
  }, 
  {
    matrixA: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, false],
    ],
    matrixB: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 94,
  },
  {
    matrixA: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, false],
    ],
    matrixB: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 94,
  },
  {
    matrixA: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, false, false],
    ],
    matrixB: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 88,
  },
  {
    matrixA: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, false, false, false],
    ],
    matrixB: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 81,
  },
  {
    matrixA: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [false, false, false, false],
    ],
    matrixB: [
      [true, true, true, true], 
      [true, true, true, true], 
      [true, true, true, true],
      [true, true, true, true],
    ],
    similarity: 75,
  },
]