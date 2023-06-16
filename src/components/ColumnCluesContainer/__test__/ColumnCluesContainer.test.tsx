import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ColumnCluesContainer from "../ColumnCluesContainer";

const matrix = [
  [true, false, true],
  [true, false, true],
  [true, true, true],
];

describe("ColumnCluesContainer", () => {
  it("renders a column for each column of the board", () => {
    const { container } = render(<ColumnCluesContainer matrix={matrix} />);
    const columnCluesContainer = container.firstChild;

    const gridResolution = matrix.length;

    const columns = columnCluesContainer?.childNodes;

    expect(columns).toHaveLength(gridResolution);
  });
});
