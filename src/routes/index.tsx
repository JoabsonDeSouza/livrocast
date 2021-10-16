import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDescription from '../pages/BookDescription';

import RouteHome from './tabs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import useAuth from '../hooks/useAuth';
import { useApp } from '../context/app';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  RouteHome: undefined;
  BookDescription: undefined;
  AuthRoutes: undefined;
  AppRoutes: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  const { userLogged } = useApp();

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {userLogged ? (
        <>
          <AppStack.Screen name="RouteHome" component={RouteHome} />
          <AppStack.Screen name="BookDescription" component={BookDescription} />
        </>
      ) : (
        <>
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Register" component={Register} />
        </>
      )}
    </AppStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
