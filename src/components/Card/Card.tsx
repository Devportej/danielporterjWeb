import { ReactNode, FC } from "react";
import "./Card.css";

type Props = {
  children: ReactNode;
};

const Card: FC<Props> = ({ children }) => (
  <div className="card">{children}</div>
);

export default Card;
