import { NavigateFunction } from 'react-router-dom';
import './NLink.css';
import { goTo } from '../../utilities/funcs';

type LinkProps =
  | { location: string; text: string; nav?: NavigateFunction; external?: false } // internal
  | { location: string; text: string; external: true }; // external link

const isExternal = (
  p: LinkProps
): p is { location: string; text: string; external: true } =>
  'external' in p && (p as { external?: boolean }).external === true;

const NLink = (props: LinkProps) => {
  if (isExternal(props)) {
    return (
      <a
        className="link"
        href={props.location}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.text}
      </a>
    );
  }

  const { location, text, nav } = props as {
    location: string;
    text: string;
    nav?: NavigateFunction;
  };
  return (
    <button className="link" onClick={() => goTo({ location, nav })}>
      {text}
    </button>
  );
};

export default NLink;
