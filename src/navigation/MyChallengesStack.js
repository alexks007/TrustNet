import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyChallengesScreen from './../screens/MyChallengesStack/MyChallengesScreen';
import { CustomHeader } from '@components';

const Stack = createStackNavigator();

const MyChallengeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyChallenges"
        component={MyChallengesScreen}
        options={{
          header: (props) => <CustomHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyChallengeStack;
