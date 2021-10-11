import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
`;
