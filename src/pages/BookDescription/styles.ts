import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding-left: 20px;
  padding-right: 20px;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
  color?: string;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => size || 12}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ color }) => color || colors.secondary};
  padding-bottom: 5px;
`;

export const CardImage = styled.View`
  width: 80%;
  height: 250px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  border-radius: 8px;
`;

export const ContainerTimer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerButtonsControl = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const ContainerButtons = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContainerBtnIcon = styled.View`
  align-items: center;
`;
