import styled from 'styled-components/native';

export const ContainerParent = styled.View`
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px 15px 20px 15px;
  justify-content: space-between;
`;

export const Separator = styled.View`
  width: 93%;
  border-bottom-width: 0.6px;
  border-color: ${({ theme }) => theme.textHeader};
`;

export const TextName = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.textHeader};
  font-weight: 400;
`;

const avatarSize = 35;

export const Avatar = styled.Image`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  border-radius: ${avatarSize / 2}px;
`;
