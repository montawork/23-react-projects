import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=5f4d6388`;
const AppContext = React.createContext();

const initialState = {
  movies: [],
  isLoading: true,
  query: 'batman',
  errorMessage: '',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch movies
  const fetchMovies = React.useCallback(async () => {
    const resp = await fetch(`${API_ENDPOINT}&s=${state.query}`);
    const data = await resp.json();
    dispatch({ type: 'FETCH_MOVIES', payload: data });
  }, [state.query]);

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    fetchMovies();
  }, [state.query, fetchMovies]);

  const getQuery = (value) => {
    dispatch({ type: 'GET_QUERY', payload: value });
  };

  return (
    <AppContext.Provider value={{ ...state, getQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
