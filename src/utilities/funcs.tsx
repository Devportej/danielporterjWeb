import { NavigateFunction } from 'react-router-dom';

type GoToParams = {
  location: string;
  nav?: NavigateFunction;
  external?: boolean;
};

export const goTo = ({ location, nav, external }: GoToParams) => {
  if (external) {
    window.open(location, '_blank');
  } else if (nav) {
    nav(location);
  } else {
    console.error('Navigate function is not provided for internal navigation.');
  }
};
