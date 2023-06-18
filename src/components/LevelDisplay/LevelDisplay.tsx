interface Props {
  level: number;
}

export default function LevelDisplay({ level }: Props) {
  return <span>Level: {level}</span>;
}
