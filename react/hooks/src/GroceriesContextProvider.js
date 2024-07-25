import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GroceriesContext = createContext([]);
export const GroceriesContextProvider = ({ children }) => {
  const [groceries, setGroceries] = useState([]);

  const contextValue = {
    groceries,
    addItem: (newItem) =>
      setGroceries((currentGroceries) => [...currentGroceries, newItem]),
  };

  return (
    <GroceriesContext.Provider value={contextValue}>
      {children}
    </GroceriesContext.Provider>
  );
};

GroceriesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
