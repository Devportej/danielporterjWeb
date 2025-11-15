import './Footer.css';
import NLink from '../NLink/NLink';
import Image from '../Image/Image';

const Footer = () => {
  return (
    <footer className="footer">
      <Image
        src="/portfolio_logo.jpg"
        alt="Website logo"
        width={128}
        height={128}
        loading="lazy"
        className="image-center"
      />
      <span className="socials">
        <NLink
          location="https://www.linkedin.com/in/danielporterj/"
          text="LinkedIn"
          external={true}
        />
      </span>
      <span className="siteMap">
        © {new Date().getFullYear()} Daniel Porter
      </span>
    </footer>
  );
};

export default Footer;
