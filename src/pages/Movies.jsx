import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import css from '../components/App.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [foundFilms, setFoundFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (searchQuery === '') return;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRhNzk5NWRjYjk2OTM0YWE4MzU1MDIzYTEwNjI0YyIsInN1YiI6IjY0ZTc4NzZhNTk0Yzk0MDExYzM1ZmViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6frVgnjYRfE5oQtx-Q6Irkw72W67RYy_0_qTBVd5JjI',
      },
    };

    async function fetchFilms() {
      const films = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}`,
        options
      )
        .then(response => response.json())
        .then(data => setFoundFilms([...data.results]));
    }

    fetchFilms();
  }, [searchQuery]);

  const updateQueryString = event => {
    if (event.target.value === '') {
      setFoundFilms([]);
      return setSearchParams({});
    } else {
      setSearchParams({ query: event.target.value });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
  };

  return (
    <main className={css.Form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="search"
          value={searchQuery}
          onChange={updateQueryString}
        ></input>
        <button type="submit">Search</button>
      </form>
      {foundFilms !== null && (
        <ul>
          {foundFilms.map(film => {
            return (
              <li key={film.id}>
                <Link
                  to={`${film.id}`}
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
      )}
    </main>
  );
};

export default Movies;
