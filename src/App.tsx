import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
