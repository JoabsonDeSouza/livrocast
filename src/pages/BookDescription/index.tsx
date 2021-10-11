import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const BookDescription = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text onPress={() => navigation.goBack()}>BookDescription</Text>
    </Container>
  );
};

export default BookDescription;
