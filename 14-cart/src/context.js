import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

// initial state
const initialState = {
  isLoading: true,
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
};

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // distructuring state
  const { cart, totalPrice, totalAmount, isLoading } = state;

  // fetch data
  const fetchItems = async () => {
    const res = await fetch(url);
    const items = await res.json();
    // dispatch
    dispatch({ type: 'FETCH_ITEMS', payload: items });
  };
  useEffect(() => {
    fetchItems();
  }, []);

  // increase
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  // decrease
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  // total amount
  useEffect(() => {
    dispatch({ type: 'TOTAL_AMOUNT' });
  }, [cart]);

  // total price
  useEffect(() => {
    dispatch({ type: 'TOTAL_PRICE' });
  }, [cart]);

  // remove item
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        isLoading,
        increase,
        decrease,
        clearCart,
        removeItem,
        totalAmount,
        totalPrice,
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
