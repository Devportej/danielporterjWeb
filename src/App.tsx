import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Suspense fallback={<div />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
