import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Footer from './components/Footer/Footer';
import { lazy, Suspense } from 'react';
import { ROUTES } from './Routes';

const Home = lazy(() => import('./Home/Home'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <div className="body">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
