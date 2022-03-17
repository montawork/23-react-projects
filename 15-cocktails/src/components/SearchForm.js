import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { getSearchValue } = useGlobalContext();
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    getSearchValue(inputVal);
  }, [inputVal]);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
