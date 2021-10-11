import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height: 400px;
`;

export const List = styled(FlatList)`
  margin-top: 10px;
  width: 100%;
  flex: 1;
  padding-left: 15px;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => size || 15}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme }) => theme.textHeader};
`;

export const ContainerTexts = styled.View`
  padding: 15px 5px 10px 15px;
`;
