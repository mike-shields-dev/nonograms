import css from "./Header.module.css";

interface Props {
  level: number;
  moves: number;
  completeness: number;
}

export default function Header({ level, moves, completeness }: Props) {
  return (
    <header className={css.header}>
      <span>Level: {level}</span>
      <span>Moves: {moves}</span>
      <span>%: {completeness}</span>
    </header>
  );
}
