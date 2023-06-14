import useToggle from "../useToggle";

export default function useToggleWrapper() {
  const [state, toggleState] = useToggle();

  return (
    <>
      <button onClick={toggleState}>toggleState</button>
      <div>{`${state}`}</div>
    </>
  );
}
