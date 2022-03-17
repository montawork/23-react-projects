const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === 'FETCH_NEWS') {
    const { hits, page, nbPages } = action.payload;
    return {
      ...state,
      news: hits,
      page,
      nbrPages: nbPages,
      isLoading: false,
    };
  }
  if (action.type === 'GET_QUERY') {
    return {
      ...state,
      query: action.payload,
      page: 1,
    };
  }
  if (action.type === 'NEXT_PAGE') {
    if (state.page < state.nbrPages) {
      return {
        ...state,
        page: state.page + 1,
      };
    } else {
      return {
        ...state,
        page: 1,
      };
    }
  }
  if (action.type === 'PREV_PAGE') {
    if (state.page > 1) {
      return {
        ...state,
        page: state.page - 1,
      };
    } else {
      return {
        ...state,
        page: state.nbrPages,
      };
    }
  }
  if (action.type === 'REMOVE_STORY') {
    const filtredNews = state.news.filter(
      (el) => el.objectID !== action.payload
    );
    return {
      ...state,
      news: filtredNews,
    };
  }
  return state;
};
export default reducer;
