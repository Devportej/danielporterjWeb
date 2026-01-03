import { useNavigate } from 'react-router-dom';
import Card from '../components/Card/Card';
import NLink from '../components/NLink/NLink';
import Grid from '../components/Grid/Grid';
import './Projects.css';

const projects = [
  {
    id: 'calculator',
    title: 'Calculator',
    desc: 'A lightweight calculator built with React.',
  },
  {
    id: 'game-of-life',
    title: 'Game of Life',
    desc: "Conway's Game of Life simulation.",
  },
  { id: 'checkers', title: 'Checkers', desc: 'A browser-based checkers game.' },
  {
    id: 'fwag',
    title: 'Fish With a Gun',
    desc: 'A small experimental game project.',
  },
];

const Projects = () => {
  const nav = useNavigate();

  return (
    <main className="projects container">
      <h1>Projects</h1>
      <Grid cols={1} minColWidth={260} gap={20}>
        {projects.map((p) => (
          <Card key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div style={{ marginTop: 12 }}>
              <NLink location={`/projects/${p.id}`} text="View" nav={nav} />
            </div>
          </Card>
        ))}
      </Grid>
    </main>
  );
};

export default Projects;
