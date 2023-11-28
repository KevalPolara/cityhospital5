import { useReducer } from "react";
import { createContext } from "react";
import { themeReducer } from "./reducer/context.reducer";
import { TOOGLE_THEME } from "./ActionType";

const initialState = {
  theme: "light"
};

const ThemeContext = createContext();

export const ThmeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = val => {
    let newTheme = val === "dark" ? "light" : "dark";
    dispatch({type: TOOGLE_THEME, payload: newTheme});
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
