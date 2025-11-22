import Card from '../components/Card/Card';
import NLink from '../components/NLink/NLink';
import './Projects.css';

const Projects = () => {
  return (
    <main className="projects">
      <Card>
        <NLink location="./Calculator" text="Calculator" />
        <NLink location="./GameOfLife" text="Game of Life" />
        <NLink location="./Checkers" text="Checkers" />
        <NLink location="./FWAG" text="Fish With a Gun" />
      </Card>
    </main>
  );
};

export default Projects;
