interface Props {
  durationMs?: number;
}

export default function TimeDisplay({ durationMs }: Props) {
  if (!durationMs && durationMs !== 0) return null;

  const HH = Math.floor((durationMs / 1000 / 3600) % 24);
  const MM = Math.floor((durationMs / 1000 / 60) % 60);
  const SS = Math.floor((durationMs / 1000) % 60);
  const ms = Math.floor(durationMs % 1000);

  const units = ["h", "m", "s", "ms"];

  const formattedTime = [HH, MM, SS, ms]
    .map((values, i) =>
      values
        .toString()
        .concat(units[i])
        .padStart(units[i] !== "ms" ? 3 : 5, "0")
    )
    .join(":");

  return <span>{formattedTime}</span>;
}
