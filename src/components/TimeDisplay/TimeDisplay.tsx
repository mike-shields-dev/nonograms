interface Props {
  durationMs?: number;
  showMilliseconds?: boolean;
}

export default function TimeDisplay({
  durationMs,
  showMilliseconds = false,
}: Props) {
  const [hours, minutes, seconds, milliseconds] = [
    {
      name: "hours",
      value: 0,
      pad: {
        length: 2,
        char: "0",
      },
      units: "h",
    },
    {
      name: "minutes",
      value: 0,
      pad: {
        length: 2,
        char: "0",
      },
      units: "m",
    },
    {
      name: "seconds",
      value: 0,
      pad: {
        length: 2,
        char: "0",
      },
      units: "s",
    },
    {
      name: "milliseconds",
      value: 0,
      pad: {
        length: 3,
        char: "0",
      },
      units: "ms",
    },
  ];

  if (typeof durationMs === "number") {
    hours.value = Math.floor((durationMs / 1000 / 3600) % 24);
    minutes.value = Math.floor((durationMs / 1000 / 60) % 60);
    seconds.value = Math.floor((durationMs / 1000) % 60);
    milliseconds.value = showMilliseconds ? durationMs % 1000 : 0;
  }

  return (
    <span>
      {(showMilliseconds
        ? [hours, minutes, seconds, milliseconds]
        : [hours, minutes, seconds]
      ).map(({ value, name, units, pad: { length, char } }, i, array) => (
        <span key={`time-display-${name}`}>
          <span data-testid={`time-display-${name}`}>
            {`${value}`.padStart(length, char)}
          </span>
          <span>{units}</span>
          {i < array.length - 1 && <span>:</span>}
        </span>
      ))}
    </span>
  );
}
