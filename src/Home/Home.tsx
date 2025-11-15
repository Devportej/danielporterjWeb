import Card from '../components/Card/Card';
import Image from '../components/Image/Image';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const nav = useNavigate();

  return (
    <main className="home container">
      <section className="hero">
        <div className="hero-left">
          <h1>Daniel Porter</h1>
          <h2>Software Developer — Web & Frontend Engineering</h2>
          <p className="lead">
            I build performant, accessible web apps with React and TypeScript. I
            focus on clean UX, solid engineering, and production-ready
            deployments.
          </p>
          <div className="hero-cta">
            <button className="btn primary" onClick={() => nav('/projects')}>
              View Projects
            </button>
            <a
              className="btn outline"
              href="/resume.pdf"
              download="Daniel Porter - Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-right">
          <Image
            src="/portfolio_logo.jpg"
            alt="Daniel Porter logo"
            width={360}
            height={360}
          />
        </div>
      </section>

      <Card>
        <h2>Recent Work</h2>
        <p>Placeholder for featured projects. Add project cards here.</p>
      </Card>
    </main>
  );
};

export default Home;
