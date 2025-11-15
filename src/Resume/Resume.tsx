import Card from '../components/Card/Card';
import './Resume.css';

const Resume = () => {
  return (
    <main className="resume container">
      <Card>
        <h1>Resume</h1>
        <p>
          Download my resume:{' '}
          <a href="/resume.pdf" download="Daniel Porter - Resume.pdf">
            Resume (PDF)
          </a>
        </p>
      </Card>
    </main>
  );
};

export default Resume;
