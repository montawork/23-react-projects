import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';
import { useGlobalContext } from './context';
const Home = () => {
  const { movies, isLoading } = useGlobalContext();
  return (
    <main>
      <Form />
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <section className="movies">
          {movies.map((movie) => {
            return <Movies key={movie.imdbID} {...movie} />;
          })}
        </section>
      )}
    </main>
  );
};

export default Home;
