import { useState } from "react";

interface Props {
  onClick?: () => void;
  onBlur?: () => void;
  completed: number;
}

export default function CompletedDisplay({
  onClick,
  onBlur,
  completed,
}: Props) {
  const [show, setShow] = useState(false);

  function onShow() {
    if (show) return;

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
