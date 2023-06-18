import { describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CompletedDisplay from "../CompletedDisplay";

const clickSpy = vi.fn();
const blurSpy = vi.fn();

describe("CompletedDisplay", () => {
  it("should display a button", () => {
    render(<CompletedDisplay completed={0} />);

    expect(screen.getByRole("button")).toBeTruthy();

    cleanup();
  });

  it("the button should have a title of 'toggle hint'", () => {
    render(<CompletedDisplay completed={0} />);

    expect(screen.getByRole("button")).toBeTruthy();

    cleanup();
  });

  it("should display the 'complete' hint when the button is clicked", async () => {
    render(<CompletedDisplay completed={0} />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/complete:/i)).toBeTruthy();

    cleanup();
  });

  it("should hide the hint when the button loses focus", async () => {
    render(<CompletedDisplay completed={0} />);

    fireEvent.blur(screen.getByRole("button"));

    expect(screen.queryByText(/complete:/i)).toBeNull();

    cleanup();
  });

  it("should invoke the onClick handler when the button is clicked", async () => {
    render(<CompletedDisplay completed={0} onClick={clickSpy} />);

    await userEvent.click(screen.getByRole("button"));

    expect(clickSpy).toHaveBeenCalledTimes(1);

    cleanup();
  });

  it("should not invoke the onClick handler if the hint is already showing", async () => {
    // TODO: figure out how to assert this
  });

  it("should invoke the onClick handler when the button is clicked", async () => {
    render(<CompletedDisplay completed={0} onBlur={blurSpy} />);

    fireEvent.blur(screen.getByRole("button"));

    expect(blurSpy).toHaveBeenCalledTimes(1);

    cleanup();
  });
});
