import { useState } from "react";

type State = null | true | false;

export default function useToggle() {
  const [state, setState] = useState<State>(null);

  function toggleState() {
    if (state === null) return setState(true);
    if (state === true) return setState(false);
    if (state === false) return setState(null);
    return null;
  }

  return [state, toggleState];
}
