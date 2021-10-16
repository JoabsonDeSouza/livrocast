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
  Image,
} from './styles';
import Button from '../../components/Button';
import { loginService } from '../../controller/auth';

type screenProps = NativeStackNavigationProp<RootStackParamList, 'RouteHome'>;

const Login = () => {
  const navigation = useNavigation<screenProps>();
  const { showToast, logIn } = useApp();

  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    loginService({ email, password })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          logIn(check);
        }, 1000);
      })
      .catch(() => {
        setLoading(false);
        showToast('Email ou senha inválidos', 'danger');
      });
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
          <Input
            autoCapitalize="none"
            placeholder="E-mail"
            autoCorrect={false}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
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

        <Button onPress={handleLogin} loading={loading} />
      </ContainerData>
    </Container>
  );
};

export default Login;
