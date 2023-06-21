import { describe, it, vi, expect } from "vitest";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CompletedDisplay from "../CompletedDisplay";

const onClickSpy = vi.fn();
const onBlurSpy = vi.fn();

describe("CompletedDisplay", () => {
  it("should display a button", () => {
    render(<CompletedDisplay completed={0} isDisabled={true} />);

    expect(screen.getByRole("button")).toBeTruthy();

    cleanup();
  });

  it("the button should have a title of 'toggle hint'", () => {
    render(<CompletedDisplay completed={0} isDisabled={true} />);

    expect(screen.getByRole("button").getAttribute("title")).toBe(
      "toggle hint"
    );

    cleanup();
  });

  it("clicking the button should not show the hint if isDisabled prop is true", async () => {
    render(<CompletedDisplay completed={0} isDisabled={true} />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.queryByText(/complete/i)).toBeFalsy();

    cleanup();
  });

  it("clicking the button should show the hint if isDisabled prop is false", async () => {
    render(<CompletedDisplay completed={0} isDisabled={false} />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.queryByText(/complete/i)).toBeTruthy();

    cleanup();
  });

  it("clicking the button should invoke the onClick handler", async () => {
    render(
      <CompletedDisplay completed={0} isDisabled={false} onClick={onClickSpy} />
    );

    await userEvent.click(screen.getByRole("button"));

    expect(onClickSpy).toHaveBeenCalledTimes(1);

    cleanup();
  });

  it("clicking the button multiple times will not invoke the onClick handler more than once", async () => {
    render(
      <CompletedDisplay completed={0} isDisabled={false} onClick={onClickSpy} />
    );

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByRole("button"));

    expect(onClickSpy).toHaveBeenCalledTimes(1);

    cleanup();
  });

  it("when the button loses focus, the hint should not be shown", async () => {
    render(
      <CompletedDisplay completed={0} isDisabled={false} onClick={onClickSpy} />
    );

    fireEvent.blur(screen.getByRole("button"));

    expect(screen.queryByText(/complete/i)).toBeNull();

    cleanup();
  });

  it("the onBlur handler should be invoked when the button loses focus", async () => {
    render(
      <CompletedDisplay completed={0} isDisabled={false} onBlur={onBlurSpy} />
    );

    fireEvent.blur(screen.getByRole("button"));

    expect(onBlurSpy).toHaveBeenCalledTimes(1);

    cleanup();
  });
});
