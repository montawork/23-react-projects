const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === 'FETCH_COCKTAILS') {
    const { drinks } = action.payload;
    if (drinks) {
      const cocktails = drinks.map((drink) => {
        const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
          drink;
        return {
          id: idDrink,
          name: strDrink,
          info: strAlcoholic,
          glass: strGlass,
          image: strDrinkThumb,
        };
      });
      return {
        ...state,
        cocktails,
        isLoading: false,
      };
    } else {
      return { ...state, cocktails: [], isLoading: false };
    }
  }
  if (action.type === 'SEARCH_VALUE') {
    return {
      ...state,
      searchInput: action.payload,
    };
  }
  return state;
};

export default reducer;
