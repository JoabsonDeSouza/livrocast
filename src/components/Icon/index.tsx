import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';

MIcon.loadFont();

export interface IconProps {
  size: number;
  name: string;
  color: string;
}

export const MaterialIcon = ({ size, name, color }: IconProps) => {
  return <MIcon name={name} size={size} color={color} />;
};
