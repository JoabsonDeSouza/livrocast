import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import themes from '../styles/themes';
import { useApp } from './app';

const Theme: React.FC = ({ children }) => {
  const { theme } = useApp();
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
