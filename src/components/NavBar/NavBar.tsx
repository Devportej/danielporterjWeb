import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { goTo } from "../../utilities/funcs";

const NavBar = () => {
  const nav = useNavigate();

  return (
    <div className="navBar">
      <button className="link" onClick={() => goTo({ location: "/", nav })}>
        Home
      </button>
      <button
        className="link"
        onClick={() => goTo({ location: "/projects", nav })}
      >
        Projects
      </button>
    </div>
  );
};

export default NavBar;
