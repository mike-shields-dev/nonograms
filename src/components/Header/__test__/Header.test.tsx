import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

import Header from "../Header";

describe("Header", () => {
  it("renders it's children", () => {
    const children = (
      <>
        <div>CHILD1</div>
        <div>CHILD2</div>
      </>
    );

    render(<Header>{children}</Header>);

    expect(screen.getByText("CHILD1")).toBeTruthy();
    expect(screen.getByText("CHILD2")).toBeTruthy();

    cleanup();
  });
});
