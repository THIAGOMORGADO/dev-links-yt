/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { createContext, useEffect, useState } from "react";

interface ContextProps {
  theme: "dark" | "light";
  setTheme: Function;
}

// Criando o Contexto de Theme
export const ThemeContext = createContext({} as ContextProps);

interface Props {
  children: React.ReactNode;
}

// Criando o Provider do ThemeContext
export function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);
  }, [theme]);

  // Retornando o Provider com os valores do theme e a função para alterar o theme
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
