import { useState } from "react";
import { Grid } from "../../types";
import { calculateCompleteness } from "../../utils";

interface Props {
  onClick?: () => void;
  onBlur?: () => void;
  userGrid: Grid;
  levelGrid: Grid;
  isDisabled: boolean;
}

export default function CompletedDisplay({
  onClick,
  onBlur,
  userGrid,
  levelGrid,
  isDisabled,
}: Props) {
  const [show, setShow] = useState(false);

  function onBtnClick() {
    setShow(true);
    onClick?.();
  }

  function onBtnBlur() {
    setShow(false);
    onBlur?.();
  }

  return (
    <span>
      {show ? `Complete: ${calculateCompleteness(userGrid, levelGrid)}%` : ""}
      <button
        title="toggle hint"
        disabled={isDisabled}
        onFocus={onBtnClick}
        onBlur={onBtnBlur}
      >
        Hint
      </button>
    </span>
  );
}
