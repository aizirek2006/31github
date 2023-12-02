import { createContext, useState } from "react";

export const BasketContext = createContext({
  items: [],
});

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToBasket = (newItem) => {
    setItems((prevState) => {
      if (!prevState.length) {
        return [newItem];
      }

      const doesItemExist = prevState.find(
        (oldItem) => oldItem.id === newItem.id  
      );
      if (!doesItemExist) {
        return [...prevState, newItem];
      }

      const updateItems = prevState.map((oldItem) => {
        if (oldItem.id === newItem.id) {
          oldItem.amount = oldItem.amount + newItem.amount;
        }
        return oldItem;
      });

      return updateItems;
    });
  };

  const state = {
    items,
    addToBasket,
  };
  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
