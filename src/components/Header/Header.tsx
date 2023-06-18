import css from "./Header.module.css";

interface Props {
  children?: React.ReactNode;
}

export default function Header({ children }: Props) {
  return <header className={css.header}>{children}</header>;
}
