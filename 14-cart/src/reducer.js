const reducer = (state, action) => {
  if (action.type === 'FETCH_ITEMS') {
    const items = action.payload;
    return { ...state, cart: items, isLoading: false };
  }
  // increase / decrease
  const handleAmount = (actionType, passedID) => {
    let newCart = state.cart
      .map((item) => {
        if (item.id === passedID) {
          if (actionType === 'INCREASE') {
            return { ...item, amount: item.amount + 1 };
          }
          if (actionType === 'DECREASE') {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    return {
      ...state,
      cart: newCart,
    };
  };
  if (action.type === 'INCREASE') {
    const increaseAmount = handleAmount(action.type, action.payload);
    return increaseAmount;
  }
  if (action.type === 'DECREASE') {
    const decreaseAmount = handleAmount(action.type, action.payload);
    return decreaseAmount;
  }
  if (action.type === 'TOTAL_AMOUNT') {
    const total = state.cart.reduce((val, curr) => (val += curr.amount), 0);
    return {
      ...state,
      totalAmount: total,
    };
  }
  if (action.type === 'TOTAL_PRICE') {
    const total = +state.cart
      .reduce((val, curr) => val + +curr.price * curr.amount, 0)
      .toFixed(2);
    return {
      ...state,
      totalPrice: total,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

export default reducer;
