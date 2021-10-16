import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useApp } from '../../context/app';
import useAuth from '../../hooks/useAuth';

import { Container, Text } from './styles';

const Settings = () => {
  const { changeTheme, logOut } = useApp();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => changeTheme()}>
        <Text>Alterar Tema</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Settings;
