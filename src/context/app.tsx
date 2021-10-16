import React, { createContext, useContext, useState } from 'react';

import useAppTheme from '../hooks/useAppTheme';
import { useToast } from 'react-native-toast-notifications';

interface AppContextData {
  theme: 'dark' | 'light';
  changeTheme(): void;
  loading: boolean;
  showToast(message: string, type: 'success' | 'danger'): void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [currentTheme, updateCurrentTheme] = useAppTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  async function changeTheme(): Promise<void> {
    updateCurrentTheme();
  }

  function showToast(message: string, type: 'success' | 'danger'): void {
    console.log(message);
    toast.show(message, {
      type,
      duration: 3000,
      style: {
        marginBottom: 50,
      },
    });
  }

  return (
    <AppContext.Provider
      value={{
        theme: currentTheme,
        changeTheme,
        loading,
        showToast,
      }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AuthProvider');
  }

  return context;
}

export { AppProvider, useApp };
