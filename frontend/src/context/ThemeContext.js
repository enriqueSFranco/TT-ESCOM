import { createContext, useState } from "react";

const ThemeContext = createContext(); // Creamos el contexto


const initialTheme = {
  light: false,
  dark: true,
}

// Proveedor
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(initialTheme.light);

  const handleTheme = e => e.target.checked ? setTheme(initialTheme.light) : setTheme(initialTheme.dark);

  // Datos que se van a compartir con los componentes
  const data = { theme, handleTheme };

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeContext;
