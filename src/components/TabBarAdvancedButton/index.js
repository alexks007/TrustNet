import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { TabBg } from '@components';
import { Images } from '@assets';
import styles from './styles';

const TabBarAdvancedButton = ({ bgColor, ...props }) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TabBg color={bgColor} style={styles.background} />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={Images.tab_bar_add} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default TabBarAdvancedButton;
