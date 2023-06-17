import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Portal from "../Portal";

const content = <div>TestContent</div>;

describe("Portal", () => {
  it("creates a portal and renders it's children", () => {
    render(<Portal>{content}</Portal>);

    expect(screen.getByText("TestContent")).toBeTruthy();
  });
});
