interface Props {
  moves: number;
}

export default function MovesDisplay({ moves }: Props) {
  return <span>Moves: {moves}</span>;
}
