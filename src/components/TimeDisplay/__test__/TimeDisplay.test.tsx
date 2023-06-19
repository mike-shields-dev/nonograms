import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import TimeDisplay from "../TimeDisplay";

describe("TimeDisplay", () => {
  afterEach(() => cleanup());

  describe("with showMilliseconds prop equal to true", () => {
    it("matches snapshot", () => {
      const { container } = render(
        <TimeDisplay durationMs={0} showMilliseconds={true} />
      );

      expect(container).toMatchSnapshot();
    });

    hoursTestCases.forEach(({ durationMs, expected }) => {
      it("renders hours correctly", () => {
        render(<TimeDisplay durationMs={durationMs} showMilliseconds={true} />);

        expect(screen.getByTestId("time-display-hours").textContent).toBe(
          expected.hours
        );
      });
    });

    minutesTestCases.forEach(({ durationMs, expected }) => {
      it("renders minutes correctly", () => {
        render(<TimeDisplay durationMs={durationMs} showMilliseconds={true} />);

        expect(screen.getByTestId("time-display-minutes").textContent).toBe(
          expected.minutes
        );
      });
    });

    secondsTestCases.forEach(({ durationMs, expected }) => {
      it("renders seconds correctly", () => {
        render(<TimeDisplay durationMs={durationMs} showMilliseconds={true} />);

        expect(screen.getByTestId("time-display-seconds").textContent).toBe(
          expected.seconds
        );
      });

      cleanup();
    });

    millisecondsTestCases.forEach(({ durationMs, expected }) => {
      it("renders milliseconds correctly", () => {
        render(<TimeDisplay durationMs={durationMs} showMilliseconds={true} />);

        expect(
          screen.getByTestId("time-display-milliseconds").textContent
        ).toBe(expected.milliseconds);
      });
    });
  });

  describe("with showMilliseconds prop equal to false", () => {
    it("matches snapshot", () => {
      const { container } = render(
        <TimeDisplay durationMs={0} showMilliseconds={false} />
      );

      expect(container).toMatchSnapshot();
    });

    it("does not display milliseconds", () => {
      render(<TimeDisplay durationMs={0} showMilliseconds={false} />);

      expect(screen.queryByTestId("time-display-milliseconds")).toBeNull();
    });

    hoursTestCases.forEach(({ durationMs, expected }) => {
      it("renders hours correctly", () => {
        render(
          <TimeDisplay durationMs={durationMs} showMilliseconds={false} />
        );

        expect(screen.getByTestId("time-display-hours").textContent).toBe(
          expected.hours
        );
      });
    });

    minutesTestCases.forEach(({ durationMs, expected }) => {
      it("renders minutes correctly", () => {
        render(
          <TimeDisplay durationMs={durationMs} showMilliseconds={false} />
        );

        expect(screen.getByTestId("time-display-minutes").textContent).toBe(
          expected.minutes
        );
      });
    });

    secondsTestCases.forEach(({ durationMs, expected }) => {
      it("renders seconds correctly", () => {
        render(
          <TimeDisplay durationMs={durationMs} showMilliseconds={false} />
        );

        expect(screen.getByTestId("time-display-seconds").textContent).toBe(
          expected.seconds
        );
      });
    });
  });
});

const millisecondsTestCases = [
  {
    durationMs: 0,
    expected: {
      milliseconds: "000",
      seconds: "00",
      minutes: "00",
      hours: "00",
    },
  },
  {
    durationMs: 1,
    expected: {
      milliseconds: "001",
      seconds: "00",
      minutes: "00",
      hours: "00",
    },
  },
  {
    durationMs: 9,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "009",
    },
  },
  {
    durationMs: 10,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "010",
    },
  },
  {
    durationMs: 99,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "099",
    },
  },
  {
    durationMs: 100,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "100",
    },
  },
  {
    durationMs: 999,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "999",
    },
  },
];

const secondsTestCases = [
  {
    durationMs: 1000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "01",
      milliseconds: "000",
    },
  },
  {
    durationMs: 9000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "09",
      milliseconds: "000",
    },
  },
  {
    durationMs: 10000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "10",
      milliseconds: "000",
    },
  },
  {
    durationMs: 59000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "59",
      milliseconds: "000",
    },
  },
];

const minutesTestCases = [
  {
    durationMs: 60000,
    expected: {
      hours: "00",
      minutes: "01",
      seconds: "00",
      milliseconds: "000ms",
    },
  },
  {
    durationMs: 3540000,
    expected: {
      hours: "00",
      minutes: "59",
      seconds: "00",
      milliseconds: "000",
    },
  },
];

const hoursTestCases = [
  {
    durationMs: 3600000,
    expected: {
      hours: "01",
      minutes: "00",
      seconds: "00",
      milliseconds: "000",
    },
  },
  {
    durationMs: 82800000,
    expected: {
      hours: "23",
      minutes: "00",
      seconds: "00",
      milliseconds: "000",
    },
  },
];
