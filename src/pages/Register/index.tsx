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
  Image,
} from './styles';
import { validateEmail } from '../../utils/helpers';
import { useApp } from '../../context/app';
import { createUserService } from '../../controller/auth';
import Button from '../../components/Button';

const Register = () => {
  const navigation = useNavigation();
  const { showToast } = useApp();

  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setCheck(prev => !prev);
  };

  const handleRegister = () => {
    if (!email || !password) {
      showToast('Email e senha necessários', 'danger');
      return;
    }

    if (!confirmPassword) {
      showToast('Confirmação de senha necessária', 'danger');
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

    if (password !== confirmPassword) {
      showToast('Senhas não conferem', 'danger');
      return;
    }

    setLoading(true);

    createUserService({ email, password })
      .then(() => {
        showToast('Usuário criado com sucesso', 'success');

        setTimeout(() => {
          setLoading(false);
          navigation.goBack();
        }, 1500);
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
          uri: 'https://plaay.com.br/wp-content/uploads/2019/07/audio-books-audiolivros.jpg',
        }}
      />
      <ContainerData>
        <Text size={30} bold color>
          Get Start
        </Text>
        <ContainerInput>
          <Input
            autoCapitalize="none"
            placeholder="E-mail"
            value={email}
            autoCorrect={false}
            onChangeText={value => setEmail(value)}
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            autoCorrect={false}
            value={password}
            autoCapitalize="none"
            onChangeText={value => setPassword(value)}
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            placeholder="Confirmar senha"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
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

        <Button onPress={handleRegister} loading={loading} />
      </ContainerData>
    </Container>
  );
};

export default Register;
