import css from './ColumnHint.module.css';

interface Props {
  columnHint: number[];
}

export default function ColumnHint({ columnHint }: Props) {
  return (
    <div className={css.column_hint}>
    {columnHint.map((count, countIndex) => (
      <div key={`column-hint-count${countIndex}`} className="hint-count">
        {count}
        {countIndex < columnHint.length - 1 && ","}
      </div>
    ))}
  </div>
  )
}