import css from "./StartOverlay.module.css";

interface Props {
  onClick: () => void;
}

export default function StartOverlay({ onClick }: Props) {
  return (
    <div className={css.start_overlay}>
      <button onClick={onClick}>START</button>
    </div>
  );
}
