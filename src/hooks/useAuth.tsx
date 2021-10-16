import { useCallback, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getLoginSaved = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_login');
    return jsonValue !== null ? !!JSON.parse(jsonValue) : false;
  } catch (e) {
    return false;
  }
};

const saveLogin = async (value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_login', jsonValue);
  } catch (e) {
    // saving error
  }
};

const useAuth = () => {
  const [logged, setLogged] = useState<boolean | undefined>();

  const save = useCallback(async () => {
    try {
      saveLogin('value');
    } catch (e) {
      setLogged(false);
    }
  }, []);

  const logOut = () => {
    setLogged(false);
    auth()
      .signOut()
      .then(() => saveLogin(''));
  };

  const execute = useCallback(async () => {
    const userFirebase = auth().currentUser;
    const userLogged = await getLoginSaved();

    if (userFirebase && userLogged) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  useEffect(() => {
    execute();
  }, [execute]);
  return { execute, logged, save, logOut };
};

export default useAuth;
