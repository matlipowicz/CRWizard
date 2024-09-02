import { useContext } from 'react';

import { ThemeContext } from '@/context/ThemeContext';

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    console.error('Current element ${ThemeContext} not wrapped in provider');
  }
  return ctx;
};
