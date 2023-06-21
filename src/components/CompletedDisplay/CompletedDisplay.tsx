import { useState } from "react";

interface Props {
  onClick?: () => void;
  onBlur?: () => void;
  completed: number;
  isDisabled: boolean;
}

export default function CompletedDisplay({
  onClick,
  onBlur,
  completed,
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
      {show ? `Complete: ${completed}%` : ""}
      <button
        title="toggle hint"
        disabled={isDisabled || show}
        onClick={onBtnClick}
        onBlur={onBtnBlur}
      >
        Hint
      </button>
    </span>
  );
}
