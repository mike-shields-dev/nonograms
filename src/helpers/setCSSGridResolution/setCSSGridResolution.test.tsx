import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { setCSSGridResolution } from "..";

describe("setCSSGridResolution", () => {
  it("sets the CSS variable --grid-resolution to the provided resolution", () => {
    render(<TestWrapper gridResolution={1} />);

    const cssGridResolution =
      document.documentElement.style.getPropertyValue("--grid-resolution");

    expect(cssGridResolution).toBe("1");
  });
});

interface Props {
  gridResolution: number;
}

function TestWrapper({ gridResolution }: Props) {
  setCSSGridResolution(gridResolution);

  return <></>;
}
