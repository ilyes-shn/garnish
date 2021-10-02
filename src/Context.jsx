import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initial = {
  menu: false,
  cookies: true,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "off":
      return {
        ...state,
        menu: false,
      };
    case "on":
      return {
        ...state,
        menu: true,
      };
    case "cookie":
      return {
        ...state,
        cookies: false,
      };

    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(Reducer, initial)}>
      {children}
    </Context.Provider>
  );
};

export const useData = () => useContext(Context);
