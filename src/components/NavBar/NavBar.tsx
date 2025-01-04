import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import NLink from "../NLink/NLink";

const NavBar = () => {
  const nav = useNavigate();

  return (
    <div className="navBar">
      <NLink location="/" text="Home" nav={nav} />
      <NLink location="/projects" text="Projects" nav={nav} />
    </div>
  );
};

export default NavBar;
