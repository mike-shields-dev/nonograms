import css from "./Header.module.css";

interface Props {
  moves: number;
  completed: number;
  children?: React.ReactNode;
}

export default function Header({ moves, children, completed }: Props) {
  return (
    <header className={css.header}>
      {children}
      <span>Moves: {moves}</span>
      <span>{`Completed: ${completed}%`}</span>
    </header>
  );
}
