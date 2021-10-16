import React, { useEffect } from 'react';
import Routes from './routes';
import ContextProvider from './context';
import Theme from './context/theme';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const init = async () => {
    const user = await auth().currentUser;
    // if (user) {
    console.log('user', user);
    // }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ContextProvider>
      <Theme>
        <Routes />
      </Theme>
    </ContextProvider>
  );
};

export default App;
