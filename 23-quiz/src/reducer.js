const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === 'FETCH_QUESTION') {
    const { results } = action.payload;

    return {
      ...state,
      questions: results,
      isLoading: false,
    };
  }
  if (action.type === 'QUESTION_NUMBER') {
    return {
      ...state,
      nbrQuestions: action.payload,
    };
  }
  if (action.type === 'SELECT_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  if (action.type === 'SELECT_DIFICULT') {
    return {
      ...state,
      difficulty: action.payload,
    };
  }
  if (action.type === 'START_QUIZ') {
    return {
      ...state,
      isStart: !state.isStart,
    };
  }
  if (action.type === 'INCREASE') {
    return {
      ...state,
      quizIndex: state.quizIndex + 1,
    };
  }
  // if (action.type === 'RESET_QUIZ') {
  //   return {
  //     ...state,
  //   };
  // }
  return state;
};

export default reducer;
