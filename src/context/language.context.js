import { createContext, useContext, useReducer } from "react";
import { languageReducer } from "./reducer/language.reducer";
import { LANGUAGE } from "./ActionType";

const initialState = {
    language : 'english',
}

const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(languageReducer,initialState) // Default language is English
  
  
    return (
      <LanguageContext.Provider value={{
       ...state,
       dispatch
        }}>
        {children}
      </LanguageContext.Provider>
    );
  };

  export default LanguageContext;
 
