import { useEffect } from "react";
import useToggle from "../../hooks/useToggle/useToggle";

import css from "./Cell.module.css";

interface Props {
  coords: [number, number];
}

export default function Cell({ coords }: Props) {
  const [state, toggleState] = useToggle();

  useEffect(() => {
    console.log({state, coords})
  }, [state, coords]);

  return (
    <button
      value={`${state}`}
      onClick={toggleState}
      className={`
        ${css.Cell} 
        ${css[`${state}`]} 
      `}
    />
  );
}
