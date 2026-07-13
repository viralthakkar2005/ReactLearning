import {createContext,useContext} from "react";

// the predefine values that we are store
export const ThemeContext=createContext({
  themeMode: "light",
  darkTheme:()=>{},
  lightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider
//here we don't pass the children because this use in the app.jsx file direct so we don't 
//need the tell how need this context
//and values write ther in app.jsx file

export default function userTheme(){
  return useContext(ThemeContext);
}
// here we made one function (hook) that return the them so we don't write every time when we need theme in another page.
