import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
}

export default function Portal({ children }: Props) {
  return <div>{createPortal(<div>{children}</div>, document.body)}</div>;
}
