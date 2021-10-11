import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const key = '@theme';

export default () => {
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark');

  async function getCurrentTheme() {
    try {
      const data = await AsyncStorage.getItem(key);
      setCurrentTheme(data ? JSON.parse(data) : 'dark');
    } catch (error) {
      setCurrentTheme('dark');
    }
  }

  const updateCurrentTheme = (): void => {
    const changeTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(changeTheme);
    AsyncStorage.setItem(key, JSON.stringify(changeTheme));
  };

  function clearCurrentTheme() {
    AsyncStorage.removeItem(key);
    setCurrentTheme('dark');
  }

  useEffect(() => {
    getCurrentTheme();
  }, []);

  return [currentTheme, updateCurrentTheme, clearCurrentTheme] as const;
};
