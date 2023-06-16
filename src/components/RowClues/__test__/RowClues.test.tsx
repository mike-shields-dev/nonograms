import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  render,
  screen,
} from '@testing-library/react';

import RowClues from '../RowClues';

describe("RowClues", () => {
  it("renders each value in the provided rowClues prop array", () => {
    const rowCluesProp = [1, 2, 3, 4, 5, 6];
    const { container } = render(<RowClues rowClues={rowCluesProp} />);
    
    const rowClues = container.firstChild;
    
    expect(rowClues?.childNodes).toHaveLength(rowCluesProp.length);
    
    rowCluesProp.forEach((rowClue, i) => {
      const expectedCount = i < rowCluesProp.length - 1 ? `${rowClue},` : rowClue;
      
      const foundColumnClue = screen.getByText(expectedCount);
      
      expect(foundColumnClue).toBeTruthy();
    });
  });
});
