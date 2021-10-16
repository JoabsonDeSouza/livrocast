import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, View, Alert } from 'react-native';
import { MaterialIcon } from '../../components/Icon';
import colors from '../../styles/colors';

import {
  Container,
  ContainerData,
  Input,
  ContainerInput,
  ContainerCheck,
  Text,
  Button,
  Image,
} from './styles';
import { validateEmail } from '../../utils/helpers';

const Register = () => {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheck = () => {
    setCheck(prev => !prev);
  };

  return (
    <Container>
      <Image
        source={{
          uri: 'https://plaay.com.br/wp-content/uploads/2019/07/audio-books-audiolivros.jpg',
        }}
      />
      <ContainerData>
        <Text size={30} bold color>
          Get Start
        </Text>
        <ContainerInput>
          <Input placeholder="Nome" />
        </ContainerInput>
        <ContainerInput>
          <Input placeholder="E-mail" />
        </ContainerInput>
        <ContainerInput>
          <Input placeholder="Password" secureTextEntry />
        </ContainerInput>

        <ContainerCheck>
          <TouchableOpacity onPress={handleCheck}>
            <MaterialIcon
              name={!check ? 'radio-button-unchecked' : 'check-circle'}
              size={25}
              color={colors.orange}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 12 }}>
            Eu aceito os Termos de Serviço e Politicas de Privacidade
          </Text>
        </ContainerCheck>
        <View style={{ position: 'absolute', bottom: '20%', left: 40 }}>
          <Text size={20} bold color style={{ marginTop: 40 }}>
            Sign Up
          </Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text size={17} color style={{ marginTop: 40 }} underline>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <Button>
          <MaterialIcon name={'arrow-forward'} size={30} color={colors.white} />
        </Button>
      </ContainerData>
    </Container>
  );
};

export default Register;
