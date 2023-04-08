import React, { useState, useMemo, createContext, useReducer } from "react";
import { globalReducer } from "../../Reducers/globalReducer";

export const initialState = { theme: "light", data: [], favs: JSON.parse(localStorage.getItem("favs")) || [] };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(globalReducer, initialState)

  const value = useMemo(() => [state, dispatch], [state])

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
  
};