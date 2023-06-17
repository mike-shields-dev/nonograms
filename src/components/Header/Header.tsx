import css from "./Header.module.css";

interface Props {
  level: number;
  moves: number;
  completed: number;
}

export default function Header({
  level,
  moves,
  completed: completeness,
}: Props) {
  return (
    <header className={css.header}>
      <span>Level: {level}</span>
      <span>Moves: {moves}</span>
      <span>{`Completed: ${completeness}%`}</span>
    </header>
  );
}
