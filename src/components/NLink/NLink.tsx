import { NavigateFunction } from "react-router-dom";
import "./NLink.css";
import { goTo } from "../../utilities/funcs";

type LinkProps =
  | { location: string; text: string; nav: NavigateFunction; external?: never } // nav is required if external is not provided
  | { location: string; text: string; nav?: never; external: boolean }; // external is required if nav is not provided

const NLink = (props: LinkProps) => {
  const { location, text, nav, external } = props;

  return (
    <button className="link" onClick={() => goTo({ location, nav, external })}>
      {text}
    </button>
  );
};

export default NLink;
