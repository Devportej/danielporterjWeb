import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const goTo = (location: string) => {
        navigate(location);
    }

    return (
      <div className="navBar">
        <button onClick={() => goTo("/")}>Home</button>
        <button onClick={() => goTo("/projects")}>Projects</button>
      </div>
    );
}

export default NavBar;