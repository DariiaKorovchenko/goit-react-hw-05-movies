import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../components/App.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState({});
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
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setMovieReviews(data);
      })
      .catch(err => <div>{err}</div>);
  }, [movieId]);

  return (
    <div className={css.container}>
      {movieReviews.results !== undefined && (
        <div>
          {movieReviews.results.length === 0 && (
            <p>We don't have any reviews for this movie</p>
          )}
          {movieReviews.results.length !== 0 &&
            movieReviews.results.map(review => {
              return (
                <li key={review.id} className={css.reviews_list}>
                  <h4 key={review.author}>Author: {review.author}</h4>
                  {review.content}
                </li>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
