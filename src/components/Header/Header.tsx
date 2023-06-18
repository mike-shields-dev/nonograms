import css from "./Header.module.css";

interface Props {
  completed: number;
  children?: React.ReactNode;
}

export default function Header({ children, completed }: Props) {
  return (
    <header className={css.header}>
      {children}
      <span>{`Completed: ${completed}%`}</span>
    </header>
  );
}
