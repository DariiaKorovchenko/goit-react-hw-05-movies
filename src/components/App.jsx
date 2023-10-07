import { Route, Routes, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
