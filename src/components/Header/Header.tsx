import css from './Header.module.css'

interface Props {
  level: number;
  moves: number;
}

export default function Header({ level, moves }: Props) {
  return (
    <header className={css.header}>
      <span>Level: {level}</span>
      <span>Moves: {moves}</span>
    </header>
  )
}