import React, { useEffect } from 'react';
import Routes from './routes';
import ContextProvider from './context';
import Theme from './context/theme';
import SplashScreen from 'react-native-splash-screen';
import useAuth from './hooks/useAuth';

const App: React.FC = () => {
  const { logged } = useAuth();

  useEffect(() => {
    if (logged === undefined) return;

    SplashScreen.hide();
  }, [logged]);

  return (
    <ContextProvider>
      <Theme>
        <Routes />
      </Theme>
    </ContextProvider>
  );
};

export default App;
