import "./Footer.css";
import NLink from "../NLink/NLink";

const Footer = () => {
  return (
    <div className="footer">
      <img src="/portfolio_logo.jpg" alt="Website logo" height={"128px"} />
      <span className="socials">
        <NLink
          location="https://www.linkedin.com/in/danielporterj/"
          text="LinkedIn"
          external={true}
        />
      </span>
      <span className="siteMap">butt</span>
    </div>
  );
};

export default Footer;
