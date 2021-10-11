import React from 'react';
import { Book } from '../../../../model/book';
import { useNavigation } from '@react-navigation/native';

import { Container, Text, ContainerTexts } from './styles';
import { TouchableOpacity } from 'react-native';

interface CardProps {
  book: Book;
}

const Card = ({ book }: CardProps) => {
  const navigation: any = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('BookDescription', {
      book,
    });
  };

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <Container
        source={{
          uri: book.cover,
        }}
      />
      <ContainerTexts>
        <Text bold size={14}>
          {book.title}
        </Text>
        <Text>{book.written}</Text>
      </ContainerTexts>
    </TouchableOpacity>
  );
};

export default Card;
