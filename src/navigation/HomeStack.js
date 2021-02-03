import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from './../screens/HomeStack/FeedScreen';
import { CustomHeader } from '@components';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          header: (props) => <CustomHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
