import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Footer from "./components/Footer/Footer";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
