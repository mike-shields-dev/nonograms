import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ColumnCluesContainer from "../ColumnCluesContainer";

const Grid = [
  [true, false, true],
  [true, false, true],
  [true, true, true],
];

describe("ColumnCluesContainer", () => {
  it("renders a column for each column of the board", () => {
    const { container } = render(<ColumnCluesContainer levelGrid={Grid} />);
    const columnCluesContainer = container.firstChild;

    const gridResolution = Grid.length;

    const columns = columnCluesContainer?.childNodes;

    expect(columns).toHaveLength(gridResolution);
  });
});
