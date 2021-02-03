import React from 'react';
import { Image } from 'react-native';
import { RatioW } from '@utils';

const CustomImage = (props) => {
  const { image, width, height, style } = props;
  return (
    <Image source={image} style={{ width: width * RatioW, height: height * RatioW, ...style }} />
  );
};

export default CustomImage;
