const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === 'FETCH_MOVIES') {
    const { Search } = action.payload;
    if (action.payload.Response === 'True') {
      return {
        ...state,
        movies: Search,
        isLoading: false,
        errorMessage: '',
      };
    } else {
      return {
        ...state,
        movies: [],
        isLoading: false,
        errorMessage: action.payload.Error,
      };
    }
  }
  if (action.type === 'GET_QUERY') {
    return {
      ...state,
      query: action.payload,
    };
  }
  return state;
};

export default reducer;
