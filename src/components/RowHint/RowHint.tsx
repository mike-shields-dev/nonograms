import css from './RowHint.module.css';

interface Props {
  rowHint: number[];
}

export default function RowHint({ rowHint }: Props) {
  return (
    <div className={css.row_hint}>
      {rowHint.map((count, countIndex) => (
        <div key={`row-hint-count${countIndex}`} className="hint-count">
          {count}
          {countIndex < rowHint.length - 1 && ","}
        </div>
      ))}
    </div>
  );
}
