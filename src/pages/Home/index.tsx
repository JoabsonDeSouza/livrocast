import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Text, Button } from './styles';
import { useApp } from '../../context/app';

const Home = () => {
  const navigation: any = useNavigation();
  const { changeTheme, theme } = useApp();

  return (
    <Container>
      <Text>{`Tema: ${theme}`}</Text>
      <Text onPress={() => navigation.navigate('BookDescription')}>Home</Text>
      <Button onPress={() => changeTheme()}>
        <Text>{`Mudar Tema`}</Text>
      </Button>
    </Container>
  );
};

export default Home;
