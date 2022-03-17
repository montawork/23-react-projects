import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { getQuery, query } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker nexs</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => getQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
