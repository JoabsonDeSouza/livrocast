import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';

interface ContainerProps {
  headerSize?: number;
}
export const Container = styled.View<ContainerProps>`
  padding-top: ${({ headerSize }) => headerSize || 56}px;
  flex: 1;
`;

export const ContainerData = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.textHeader};
  font-size: 30px;
`;

export const Button = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  height: 56px;
`;

export const CardOrange = styled(LinearGradient)`
  width: 100%;
  height: 40%;
  background-color: orange;
  padding: 15px;
`;

export const listColorsBackground = [
  `${colors.orange}`,
  `${colors.orange}`,
  `${colors.primary}`,
  `${colors.primary}`,
];

export const CardWhite = styled.View`
  width: 100%;
  height: 60%;
  background-color: ${({ theme }) => theme.background};
`;

const { height } = Dimensions.get('screen');

export const CardBackground = styled.View`
  width: 100%;
  height: ${height}px;
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  z-index: -100;
`;
