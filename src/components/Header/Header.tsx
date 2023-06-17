import css from "./Header.module.css";

interface Props {
  level: number;
  moves: number;
  targetMoves: number;
  completeness: number;
}

export default function Header({
  level,
  moves,
  targetMoves,
  completeness,
}: Props) {
  return (
    <header className={css.header}>
      <span>Level: {level}</span>
      <span>Moves: {moves}</span>
      <span>Target: {targetMoves}</span>
      <span>%: {completeness}</span>
    </header>
  );
}
