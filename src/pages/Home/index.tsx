import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Container,
  ContainerData,
  CardOrange,
  CardWhite,
  CardBackground,
  listColorsBackground,
} from './styles';
import Header from './Header';
import ListBests from './ListBests';
import ListBestSellers from './ListBestSellers';
import { GetBestBooks } from '../../service/api';
import { Book } from '../../model/book';
import { FlatList } from 'react-native';

const Home = () => {
  const [listBestBooks, setListBestBooks] = useState<Book[]>([]);

  const initialize = async () => {
    await GetBestBooks().then((response: any) => {
      setListBestBooks(response.data);
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Container headerSize={useSafeAreaInsets().top}>
      <Header />
      <CardBackground>
        <CardOrange colors={listColorsBackground} useAngle={true} angle={90} />
        <CardWhite />
      </CardBackground>

      <ContainerData>
        <FlatList
          data={[]}
          keyExtractor={undefined}
          renderItem={undefined}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            <>
              {listBestBooks && <ListBests list={listBestBooks} />}
              {listBestBooks && <ListBestSellers list={listBestBooks} />}
            </>
          )}
        />
      </ContainerData>
    </Container>
  );
};

export default Home;
