import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import css from '../components/App.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const [film, setFilm] = useState({});
  const [filmDate, setFilmDate] = useState('');
  const { movieId } = useParams();

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
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setFilm(data);
        setFilmDate(data.release_date.slice(0, 4));
      })
      .catch(err => <div>{err}</div>);
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={location.state?.from ?? '/movies'} className={css.goback_link}>
        Go back
      </Link>
      <div className={css.movie_container}>
        <div>
          {film.poster_path !== undefined && (
            <img
              src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
              width="300"
              alt={film.original_title}
            ></img>
          )}
        </div>

        <div className={css.movie_description}>
          <h1 className={css.movie_title}>
            {film.original_title} ({filmDate})
          </h1>
          <p>User score: {Math.round((film.vote_average / 10) * 100)}%</p>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <h2>Genres</h2>
          {film.genres !== undefined &&
            film.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
        </div>
      </div>

      <div className={css.movie_information}>
        <h3>Additional information</h3>
        <Link to="cast" className={`${css.movieLink} ${css.information_link}`}>
          Cast
        </Link>
        <Link
          to="reviews"
          className={`${css.movieLink} ${css.information_link}`}
        >
          Reviews
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
