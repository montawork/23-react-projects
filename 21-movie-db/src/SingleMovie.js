import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMovie = React.useCallback(async () => {
    const resp = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await resp.json();
    if (data.Response === 'True') {
      setIsError(false);
      setMovie(data);
    } else {
      setIsError(true);
      setMovie({ error: data.Error });
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const { Title, Poster, Year, Plot, Actors, Ratings } = movie;

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (isError) {
    return (
      <section className="single-movie">
        <div className="single-movie-info">
          <h2>{movie.error}</h2>
          <Link className="btn" to="/">
            back to movies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="single-movie">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <h4>Actors : {Actors}</h4>
        <h4>Rate : {Ratings[0].Value}</h4>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
