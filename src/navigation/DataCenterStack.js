import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DataCenterScreen from './../screens/DataCenterStack/DataCenterScreen';
import { CustomHeader } from '@components';

const Stack = createStackNavigator();

const DataCenterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DataCenter"
        component={DataCenterScreen}
        options={{
          header: (props) => <CustomHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default DataCenterStack;
