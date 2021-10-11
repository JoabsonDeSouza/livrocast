import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, Text } from './styles';

const BookDescription = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text onPress={() => navigation.goBack()}>BookDescription</Text>
    </Container>
  );
};

export default BookDescription;
