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

  function onShow() {
    if (show || isDisabled) return;

    setShow(true);
    onClick && onClick();
  }

  function onHide() {
    setShow(false);
    onBlur && onBlur();
  }

  return (
    <span>
      {show ? `Complete: ${completed}%` : ""}
      <button onClick={onShow} onBlur={onHide}>
        Hint
      </button>
    </span>
  );
}
