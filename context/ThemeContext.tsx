'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const setTheme = useCallback(() => {
    if (!darkTheme) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    if (darkTheme) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [darkTheme]);

  useEffect(() => {
    initializeTheme();
  }, []);

  useEffect(() => {
    setTheme();
  }, [setTheme]);

  function initializeTheme() {
    const theme = localStorage.getItem('theme');
    if (!theme) return;

    return theme === 'dark' ? setDarkTheme(true) : setDarkTheme(false);
  }

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode: darkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  isDarkMode: boolean;
  changeTheme: () => void;
};
