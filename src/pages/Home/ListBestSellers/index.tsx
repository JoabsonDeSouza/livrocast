import React from 'react';

import { Book } from '../../../model/book';
import Card from './Card';

import { Container, List, ContainerTexts, Title, Text } from './styles';

interface ListBestSellersProps {
  list: Book[];
}

const ListBestSellers = ({ list }: ListBestSellersProps) => {
  return (
    <Container>
      <ContainerTexts>
        <Title>Best Sellers</Title>
        <Text>Ver Todos</Text>
      </ContainerTexts>
      <List
        data={list}
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card book={item} />}
      />
    </Container>
  );
};

export default ListBestSellers;
