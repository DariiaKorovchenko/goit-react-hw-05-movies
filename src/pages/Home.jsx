import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../components/App.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRhNzk5NWRjYjk2OTM0YWE4MzU1MDIzYTEwNjI0YyIsInN1YiI6IjY0ZTc4NzZhNTk0Yzk0MDExYzM1ZmViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6frVgnjYRfE5oQtx-Q6Irkw72W67RYy_0_qTBVd5JjI',
      },
    };
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => setFilms([...response.results]))
      .catch(error => <div>{error}</div>);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link
                to={`/movies/${film.id}`}
                state={{ from: location }}
                className={css.movieLink}
              >
                {film.original_title}
                {film.original_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
