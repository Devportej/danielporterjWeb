import Card from '../components/Card/Card';
import './About.css';

const About = () => {
  return (
    <main className="about container">
      <Card>
        <h1>About Me</h1>
        <p>
          I am Daniel Porter, a software developer specializing in modern web
          applications, focusing on performance, accessibility, and clean UX.
        </p>
        <p>
          I build full-stack solutions with a preference for TypeScript, React,
          and lightweight deployment targets.
        </p>
      </Card>
    </main>
  );
};

export default About;
