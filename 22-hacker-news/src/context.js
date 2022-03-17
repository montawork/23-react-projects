import React, { useContext, useEffect, useReducer } from 'react';

import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  news: [],
  page: 1,
  nbrPages: 0,
  isLoading: true,
  query: 'next.js',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch news
  const fetchNews = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    dispatch({ type: 'FETCH_NEWS', payload: data });
  };

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    fetchNews(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  // get query
  const getQuery = (value) => {
    dispatch({ type: 'GET_QUERY', payload: value });
  };

  // next page
  const nextPage = () => {
    dispatch({ type: 'NEXT_PAGE' });
  };
  // previous page
  const prevPage = () => {
    dispatch({ type: 'PREV_PAGE' });
  };

  // remove story
  const removeStory = (id) => {
    dispatch({ type: 'REMOVE_STORY', payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, getQuery, nextPage, prevPage, removeStory }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
