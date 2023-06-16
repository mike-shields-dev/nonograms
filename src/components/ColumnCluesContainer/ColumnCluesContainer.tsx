import cluesArrFromMatrix from '../../helpers/cluesArrayFromMatrix/cluesArrayFromMatrix';
import transformMatrix from '../../helpers/transformMatrix/transformMatrix';
import { Matrix } from '../../types';
import ColumnClues from '../ColumnClues/ColumnClues';
import css from './ColumnCluesContainer.module.css';

interface Props {
  matrix: Matrix;
}

export default function ColumnCluesContainer({ matrix }: Props) {
  const transformedMatrix = transformMatrix(matrix);
  const columnCluesArr = cluesArrFromMatrix(transformedMatrix);

  return (
    <div className={css.column_clues}>
      {columnCluesArr.map((columnClues, i) => (
        <ColumnClues key={`column-clues${i}`} columnClues={columnClues} />
      ))}
    </div>
  );
}
