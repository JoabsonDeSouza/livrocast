import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  min-height: 240px;
`;

export const List = styled(FlatList)`
  margin-top: 10px;
  width: 100%;
  flex: 1;
  padding-left: 15px;
`;

export const ContainerTexts = styled.View`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => size || 15}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: orange;
  padding-bottom: 5px;
`;

export const Title = styled.Text<TextProps>`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  padding-bottom: 5px;
`;
