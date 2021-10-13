import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MFontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MIcon.loadFont();
MFontAwesome.loadFont();
MaterialCommunityIcons.loadFont();

export interface IconProps {
  size: number;
  name: string;
  color: string;
}

export const MaterialIcon = ({ size, name, color }: IconProps) => {
  return <MIcon name={name} size={size} color={color} />;
};

export const FontAwesome = ({ size, name, color }: IconProps) => {
  return <MFontAwesome name={name} size={size} color={color} />;
};

export const MatComIcons = ({ size, name, color }: IconProps) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
