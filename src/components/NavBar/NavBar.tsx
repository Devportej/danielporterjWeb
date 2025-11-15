import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import NLink from '../NLink/NLink';

const NavBar = () => {
  const nav = useNavigate();

  return (
    <nav className="navBar" aria-label="Primary">
      <NLink location="/" text="Home" nav={nav} />
      <NLink location="/projects" text="Projects" nav={nav} />
      <NLink location="/about" text="About" nav={nav} />
      <NLink location="/contact" text="Contact" nav={nav} />
      <NLink location="/resume" text="Resume" nav={nav} />
    </nav>
  );
};

export default NavBar;
