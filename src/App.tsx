import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/"/> 
      </BrowserRouter>
    </div>
  );
}
