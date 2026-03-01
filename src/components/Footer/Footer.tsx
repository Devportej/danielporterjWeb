import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__copy">
      &copy; {new Date().getFullYear()} Daniel Porter
    </span>
    <div className="footer__links">
      <a
        className="footer__link"
        href="https://www.linkedin.com/in/danielporterj/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="footer__link"
        href="https://github.com/Devportej"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
