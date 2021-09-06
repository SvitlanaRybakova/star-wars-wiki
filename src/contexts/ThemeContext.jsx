import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isBlueTheme, setTheme] = useState(true);
  

  const toggleTheme = () => {
   setTheme(!isBlueTheme);
  };

  return (
    <ThemeContext.Provider value={{isBlueTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;
