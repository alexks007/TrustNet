import React from 'react';
import { Text } from 'react-native';
import { RatioW } from '@utils';

const CustomText = (props) => {
  const { color, size, text, style, onPress } = props;

  return (
    <Text
      style={{
        color: color,
        fontSize: size * RatioW,
        textAlign: 'right',
        ...style,
      }}
      onPress={onPress}>
      {text}
    </Text>
  );
};

export default CustomText;
