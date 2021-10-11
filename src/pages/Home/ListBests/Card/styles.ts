import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../../styles/colors';

const { width } = Dimensions.get('screen');

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  width: ${width - 150}px;
  height: 270px;
  border-radius: 8px;
  overflow: 1px;
  margin-right: 10px;
  align-items: center;
`;

export const ContainerView = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const ContainerTexts = styled.View`
  padding: 10px;
`;

export const listColorsBackground = [
  'rgba(255, 255, 255, 0)',
  'rgba(0, 0, 0, 0.5)',
  'rgba(0, 0, 0, 1)',
];

interface TextProps {
  size?: number;
  bold?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => size || 13}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: white;
  padding-bottom: 5px;
`;

export const listColorsButton = [
  `${colors.red}`,
  `${colors.primary}`,
  `${colors.primary}`,
  `${colors.orange}`,
];

export const Icon = styled(LinearGradient)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
