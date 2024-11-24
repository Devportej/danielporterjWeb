import { useNavigate } from "react-router-dom";
import { goTo } from "../../utilities/funcs";
import "./Footer.css";

const Footer = () => {
  const nav = useNavigate();
  return (
    <div className="footer">
      <img src="/portfolio_logo.jpg" alt="Website logo" height={"128px"} />
      <span className="socials">
        <button
          className="link"
          onClick={() =>
            goTo({
              location: "https://www.linkedin.com/in/danielporterj/",
              external: true,
            })
          }
        >
          LinkedIn
        </button>
      </span>
      <span className="siteMap"></span>
    </div>
  );
};

export default Footer;
