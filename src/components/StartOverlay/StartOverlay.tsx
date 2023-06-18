import css from "./StartOverlay.module.css";

interface Props {
  onClick: () => void;
  show: boolean;
}

export default function StartOverlay({ onClick, show }: Props) {
  if (!show) return null;

  return (
    <div className={css.start_overlay}>
      <button className={css.start_btn} onClick={onClick}>
        START
      </button>
    </div>
  );
}
