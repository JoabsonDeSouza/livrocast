import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Text } from 'react-native';
import { MaterialIcon } from '../../components/Icon';

import { Container } from './styles';

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <Container>
      <MaterialIcon name="explore" size={20} color="#babadd" />
      <Text onPress={() => navigation.navigate('BookDescription')}>Home</Text>
    </Container>
  );
};

export default Home;
