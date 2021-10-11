import React from 'react';

import { AppProvider } from './app';

const ContextProvider: React.FC = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

export default ContextProvider;
