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

export const Button = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  height: 56px;
`;
