import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import { CustomDrawer } from '@components';
import { RatioW, width } from '@utils';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={styles.drawStyle}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Feed" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawStyle: {
    backgroundColor: 'white',
    width: width - 70 * RatioW,
  },
});
