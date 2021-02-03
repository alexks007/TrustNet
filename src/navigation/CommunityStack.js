import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyCommunityScreen from './../screens/CommunityStack/MyCommunityScreen';
import { CustomHeader } from '@components';

const Stack = createStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyCommunity"
        component={MyCommunityScreen}
        options={{
          header: (props) => <CustomHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default CommunityStack;
