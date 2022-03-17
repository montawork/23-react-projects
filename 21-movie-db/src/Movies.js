import React from 'react';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = ({ imdbID, Title, Year, Poster }) => {
  return (
    <Link to={`/movie/${imdbID}`} className="movie">
      <article>
        <img src={Poster !== 'N/A' ? Poster : url} alt={Title} />
        <div className="movie-info">
          <h4 className="title">{Title}</h4>
          <p>{Year}</p>
        </div>
      </article>
    </Link>
  );
};

export default Movies;
