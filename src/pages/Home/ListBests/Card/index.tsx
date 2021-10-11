import React from 'react';
import { Book } from '../../../../model/book';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcon } from '../../../../components/Icon';
import colors from '../../../../styles/colors';

import {
  Container,
  ContainerView,
  listColorsBackground,
  listColorsButton,
  Text,
  ContainerTexts,
  Icon,
} from './styles';
import { TouchableOpacity } from 'react-native';

interface CardProps {
  item: Book;
}

const Card = ({ item }: CardProps) => {
  const navigation: any = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('BookDescription', {
      book: item,
    });
  };

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <Container
        source={{
          uri: item.cover,
        }}>
        <ContainerView colors={listColorsBackground}>
          <Icon colors={listColorsButton} useAngle={true} angle={90}>
            <MaterialIcon name="play-arrow" size={30} color={colors.white} />
          </Icon>
          <ContainerTexts>
            <Text bold size={22}>
              {item.title}
            </Text>
            <Text>{item.written}</Text>
            <Text>{item.time}</Text>
          </ContainerTexts>
        </ContainerView>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
