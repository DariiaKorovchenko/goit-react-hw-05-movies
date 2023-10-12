import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import profile from './profile.jpg';

const Cast = () => {
  const [movieCast, setMovieCast] = useState({});
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
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setMovieCast(data);
      })
      .catch(err => <div>{err}</div>);
  }, [movieId]);

  return (
    <div className={css.Cast}>
      {movieCast.cast !== undefined && (
        <div>
          {movieCast.cast.length === 0 && (
            <p>We don't have any actors for this movie</p>
          )}
          {movieCast.cast.length !== 0 &&
            movieCast.cast.map(actor => {
              return (
                <li key={actor.id} className={css.actor}>
                  {actor.profile_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                      width="100"
                      alt={actor.name}
                    ></img>
                  ) : (
                    <img src={profile} width="100" alt={actor.name} />
                  )}

                  <p>{actor.name}</p>

                  <p>Character: {actor.character}</p>
                </li>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Cast;
