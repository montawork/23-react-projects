import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { getQuery, errorMessage } = useGlobalContext();
  const [query, setQuery] = useState('batman');

  useEffect(() => {
    getQuery(query);
  }, [query]);

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="error">{errorMessage}</div>
    </form>
  );
};

export default SearchForm;
