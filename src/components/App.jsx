import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Layout = lazy(() => import('../components/Layout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Layout />
            </Suspense>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
