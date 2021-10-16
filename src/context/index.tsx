import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';

import { AppProvider } from './app';

const ContextProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AppProvider>{children}</AppProvider>
  </ToastProvider>
);

export default ContextProvider;
