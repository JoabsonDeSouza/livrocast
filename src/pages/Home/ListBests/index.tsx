import React from 'react';
import { Book } from '../../../model/book';
import Card from './Card';

import { Container, List, Text, ContainerTexts } from './styles';

interface ListBestsProps {
  list: Book[];
}

const ListBests = ({ list }: ListBestsProps) => {
  return (
    <Container>
      <ContainerTexts>
        <Text size={30} bold style={{ marginBottom: 5 }}>
          Best Match
        </Text>
        <Text>Based on your interest</Text>
      </ContainerTexts>

      <List
        data={list}
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
      />
    </Container>
  );
};

export default ListBests;
