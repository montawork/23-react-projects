import React, { useReducer, useContext, useEffect, useCallback } from 'react';
import reducer from './reducer';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const initialState = {
  cocktails: [],
  isLoading: true,
  searchInput: 'a',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch cocktails
  const getCocktails = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    const resp = await fetch(`${url}${state.searchInput}`);
    const data = await resp.json();
    dispatch({ type: 'FETCH_COCKTAILS', payload: data });
  }, [state.searchInput]);
  useEffect(() => {
    getCocktails();
  }, [state.searchInput, getCocktails]);

  // get search value
  const getSearchValue = (c) => {
    dispatch({ type: 'SEARCH_VALUE', payload: c });
  };

  return (
    <AppContext.Provider value={{ ...state, getSearchValue }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
