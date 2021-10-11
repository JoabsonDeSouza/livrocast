import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Others from '../pages/Others';

import { MaterialIcon } from '../components/Icon';
import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator();

function Tabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
        },
        tabBarInactiveTintColor: theme.inactiveTab,
        tabBarActiveTintColor: theme.activeTab,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="explore" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Others}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon
              name="supervised-user-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
