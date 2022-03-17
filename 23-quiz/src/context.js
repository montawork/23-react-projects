// import axios from 'axios';
import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const initialState = {
  questions: [],
  isLoading: true,
  nbrQuestions: 10,
  category: 'history',
  difficulty: 'easy',
  isStart: false,
  allOptions: [],
};

// const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `https://opentdb.com/api.php?amount=${
    state.nbrQuestions
  }&category=${table[state.category]}&difficulty=${
    state.difficulty
  }&type=multiple`;

  // fetch question
  const fetchQuestion = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    dispatch({ type: 'FETCH_QUESTION', payload: data });
  };
  useEffect(() => {
    dispatch({ type: 'LOADING' });
    fetchQuestion(url);
  }, [url]);

  // form
  const getQuestionsNumber = (nbr) => {
    dispatch({ type: 'QUESTION_NUMBER', payload: nbr });
  };
  const getCategory = (choice) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: choice });
  };
  const slectDificult = (choice) => {
    dispatch({ type: 'SELECT_DIFICULT', payload: choice });
  };
  // start new quiz
  const startNewQuiz = () => {
    dispatch({ type: 'START_QUIZ' });
  };

  // reset quiz
  const resetQuiz = () => {
    fetchQuestion(url);
    // dispatch({ type: 'RESET_QUIZ' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getQuestionsNumber,
        getCategory,
        slectDificult,
        startNewQuiz,
        resetQuiz,
      }}
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
