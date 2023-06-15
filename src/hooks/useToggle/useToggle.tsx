import { useState } from "react";

type State = null | true | false;

export default function useToggle() {
  const [state, setState] = useState<State>(null);

  const toggleState = () => {
    if (state === null) return setState(true);
    if (state === true) return setState(false);
    if (state === false) return setState(null);
  }

  return [state, toggleState];
}
