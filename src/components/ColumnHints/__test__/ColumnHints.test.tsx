import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import ColumnHints from "../ColumnHints";

const matrix = [
  [true, false, true],
  [true, false, true],
  [true, true, true],
]

describe("ColumnHints", () => {
  let parentElement: ChildNode | null;

  beforeEach(() => {
    const { container } = render(<ColumnHints matrix={matrix} />);
    parentElement = container.firstChild;
  });

  afterEach(cleanup);

  it('renders a column for each column of the board', () => {
    const gridResolution = matrix.length;

    const columns = parentElement?.childNodes;
    
    expect(columns).toHaveLength(gridResolution);
  });
});
