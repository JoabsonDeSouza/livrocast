import React from 'react';

import { SafeAreaView } from 'react-native';
import logo from '../../../assets/logo.png';

import {
  ContainerParent,
  Container,
  TextName,
  Avatar,
  Separator,
  Logo,
} from './styles';

const Header = () => {
  return (
    <ContainerParent>
      <SafeAreaView />

      <Container>
        <Logo source={logo} />
        <Avatar
          source={{
            uri: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
          }}
        />
      </Container>
      <Separator />
    </ContainerParent>
  );
};

export default Header;
