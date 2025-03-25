import { createContext, ReactNode, useState } from "react";

type ThemeContextValues = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextValues>(
  {} as ThemeContextValues,
);

type Props = {
  children: ReactNode;
};

const ThemeContextProvider = (props: Props) => {
  const themeLocal = localStorage.getItem("theme")!;

  const [theme, setTheme] = useState(themeLocal ? themeLocal : "dark");

  const body = document.getElementsByTagName("body")[0];
  body?.setAttribute("data-type", theme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
