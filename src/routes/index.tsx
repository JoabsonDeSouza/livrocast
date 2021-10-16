import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDescription from '../pages/BookDescription';

import RouteHome from './tabs';
import Login from '../pages/Login';
import Register from '../pages/Register';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  RouteHome: undefined;
  BookDescription: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RouteHome" component={RouteHome} />
      <Stack.Screen name="BookDescription" component={BookDescription} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
