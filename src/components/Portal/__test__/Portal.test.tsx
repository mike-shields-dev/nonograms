import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Portal from "../Portal";

const children = <div>CHILDREN</div>;

describe("Portal", () => {
  it("creates a portal and renders it's children within", () => {
    const { container } = render(<Portal>{children}</Portal>);

    expect(container.children).toHaveLength(1);
    expect(screen.getByText("CHILDREN")).toBeTruthy();
  });
});
