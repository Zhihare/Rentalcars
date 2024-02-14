import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';


const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));


function App() {
  return (
    <>
      <Suspense >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/catalog"
              element={<CatalogPage />}
            />
            <Route
              path="/favorites"
              element={<FavoritePage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
