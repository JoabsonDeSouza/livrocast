import React, { createContext, useContext, useState } from 'react';

import useAppTheme from '../hooks/useAppTheme';

interface AppContextData {
  theme: 'dark' | 'light';
  changeTheme(): void;
  loading: boolean;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [currentTheme, updateCurrentTheme] = useAppTheme();
  const [loading, setLoading] = useState<boolean>(false);

  async function changeTheme(): Promise<void> {
    updateCurrentTheme();
  }

  return (
    <AppContext.Provider
      value={{
        theme: currentTheme,
        changeTheme,
        loading,
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
