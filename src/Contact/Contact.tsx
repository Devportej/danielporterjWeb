import Card from '../components/Card/Card';
import './Contact.css';

const Contact = () => {
  return (
    <main className="contact container">
      <Card>
        <h1>Contact</h1>
        <p>
          You can reach me at{' '}
          <a href="mailto:hello@danielporterj.com">hello@danielporterj.com</a>.
        </p>
        <p>
          Or connect via{' '}
          <a href="https://www.linkedin.com/in/danielporterj/">LinkedIn</a>.
        </p>
      </Card>
    </main>
  );
};

export default Contact;
