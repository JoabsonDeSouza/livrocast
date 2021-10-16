import auth from '@react-native-firebase/auth';

interface LoginProps {
  email: string;
  password: string;
}

export const loginService = async ({ email, password }: LoginProps) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createUserService = async ({ email, password }: LoginProps) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
