"use client";
// context/GeneralContext.js
import { createContext, useContext, useState } from "react";

// Create Context
const GeneralContext = createContext();

// Custom hook to use the GeneralContext
export const useGeneralContext = () => useContext(GeneralContext);

// General Provider
export const GeneralProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GeneralContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
