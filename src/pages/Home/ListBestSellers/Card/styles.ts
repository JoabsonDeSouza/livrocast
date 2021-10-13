import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  width: 110px;
  height: 140px;
  border-radius: 8px;
  overflow: 1px;
  margin-right: 10px;
`;

export const ContainerView = styled.View`
  width: 100%;
`;

export const ContainerTexts = styled.View`
  margin-top: 5px;
  width: 110px;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
}

export const Text = styled.Text.attrs({
  numberOfLines: 2,
})<TextProps>`
  font-size: ${({ size }) => size || 11}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme }) => theme.text};
  padding-bottom: 5px;
`;
