import React, { useState } from 'react';

import { useNavigation, StackActions } from '@react-navigation/native';
import { RootStackParamList } from '../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TouchableOpacity, View, Alert } from 'react-native';
import { MaterialIcon } from '../../components/Icon';
import colors from '../../styles/colors';
import { validateEmail } from '../../utils/helpers';
import { useApp } from '../../context/app';

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

type screenProps = NativeStackNavigationProp<RootStackParamList, 'RouteHome'>;

const Login = () => {
  const navigation = useNavigation<screenProps>();
  const { showToast } = useApp();

  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheck = () => {
    setCheck(prev => !prev);
  };

  const handleLogin = () => {
    if (!email || !password) {
      showToast('Email e senha necessários', 'danger');
      return;
    }

    if (!validateEmail(email)) {
      showToast('Email inválido', 'danger');
      return;
    }

    if (password.length < 6) {
      showToast('Senha inválida', 'danger');
      return;
    }

    showToast('Deu bom', 'success');
    // navigation.dispatch(StackActions.replace('RouteHome'));
  };

  return (
    <Container>
      <Image
        source={{
          uri: 'https://blog.grosvenorcasinos.com/wp-content/uploads/2020/04/Best-books-and-audio-books.jpg',
        }}
      />
      <ContainerData>
        <Text size={30} bold color>
          Welcome Back
        </Text>

        <ContainerInput>
          <Input placeholder="E-mail" onChangeText={value => setEmail(value)} />
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={value => setPassword(value)}
          />
        </ContainerInput>

        <ContainerCheck>
          <TouchableOpacity onPress={handleCheck}>
            <MaterialIcon
              name={!check ? 'radio-button-unchecked' : 'check-circle'}
              size={25}
              color={colors.orange}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 12 }}>Lembrar de mim</Text>
        </ContainerCheck>

        <View style={{ position: 'absolute', bottom: '20%', left: 40 }}>
          <Text size={20} bold color style={{ marginTop: 40 }}>
            Sign In
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text size={17} color style={{ marginTop: 40 }} underline>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <Button onPress={handleLogin}>
          <MaterialIcon name={'arrow-forward'} size={30} color={colors.white} />
        </Button>
      </ContainerData>
    </Container>
  );
};

export default Login;
