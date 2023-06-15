import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UseToggleWrapper from "./UseToggleWrapper";

function renderWrapper() {
  render(<UseToggleWrapper />);
}

describe("useToggleState", () => {
  beforeEach(() => renderWrapper());
  afterEach(() => cleanup());

  it("returns an initial state of null", () => {
    const stateDisplay = screen.getByText("null");

    expect(stateDisplay).toBeTruthy();
  });

  it("allows the state to be toggled", async () => {
    const toggleBtn = screen.getByText("toggleState");

    await userEvent.click(toggleBtn);

    expect(screen.getByText("true")).toBeTruthy();
    expect(screen.queryByText("null")).toBeFalsy();
    expect(screen.queryByText("false")).toBeFalsy();

    await userEvent.click(toggleBtn);

    expect(await screen.findByText("false")).toBeTruthy();
    expect(screen.queryByText("true")).toBeFalsy();
    expect(screen.queryByText("null")).toBeFalsy();

    await userEvent.click(toggleBtn);

    expect(await screen.findByText("null")).toBeTruthy();
    expect(screen.queryByText("true")).toBeFalsy();
    expect(screen.queryByText("false")).toBeFalsy();
  });
});
