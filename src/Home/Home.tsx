import { TypeAnimation } from "react-type-animation";
import Card from "../components/Card/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <TypeAnimation
        sequence={[
          "Welcome to my website!",
          1000,
          "I am a developer.",
          750,
          "I am a designer.",
          750,
          "I am Daniel Porter",
        ]}
        wrapper="h1"
        speed={50}
      />
      <Card>
        <h2>Hello</h2>
      </Card>
    </div>
  );
};

export default Home;
