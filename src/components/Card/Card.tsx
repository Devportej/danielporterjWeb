import { ReactNode, FC } from 'react';
import './Card.css';

type Props = {
  children: ReactNode;
};

const Card: FC<Props> = ({ children }) => (
  <article className="card">{children}</article>
);

export default Card;
