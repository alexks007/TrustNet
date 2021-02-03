import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TabBg = ({ color = '#FFFFFF', ...props }) => {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" {...props}>
      <Path
        d="M80.2 0v80H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 41 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  );
};

export default TabBg;
