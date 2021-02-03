import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import styled from 'styled-components';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MyChallengesStack from './MyChallengesStack.js';
import DataCenterStack from './DataCenterStack';
import CommunityStack from './CommunityStack';
import EmptyScreen from './../screens/EmptyScreen';
import { TabBarAdvancedButton, SvgIcon } from '@components';
import { Strings } from '@assets';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: '#fff',
          paddingTop: 10,
          height: 80,
        },
      }}>
      <BottomTab.Screen
        name="Feed"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <TabContainer>
                <TabItemLabel focused={focused}>{Strings.FEED_HOME}</TabItemLabel>
              </TabContainer>
            );
          },
          tabBarIcon: ({ focused }) => (
            <SvgIcon shape={'HOME'} color={focused ? '#0A2138' : '#dee2eb'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyChallenges"
        component={MyChallengesStack}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <TabContainer>
                <TabItemLabel focused={focused}>{Strings.FEED_MY_CHALLENGES}</TabItemLabel>
              </TabContainer>
            );
          },
          tabBarIcon: ({ focused }) => (
            <SvgIcon shape={'MY_CHALLENGES'} color={focused ? '#0A2138' : '#dee2eb'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="FloatingButton"
        component={EmptyScreen}
        options={{
          tabBarButton: (props) => <TabBarAdvancedButton bgColor={'#fff'} {...props} />,
        }}
      />
      <BottomTab.Screen
        name="DataCenter"
        component={DataCenterStack}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <TabContainer>
                <TabItemLabel focused={focused}>{Strings.FEED_DATA_CENTER}</TabItemLabel>
              </TabContainer>
            );
          },
          tabBarIcon: ({ focused }) => (
            <SvgIcon shape={'DATA_CENTER'} color={focused ? '#0A2138' : '#dee2eb'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyCommunity"
        component={CommunityStack}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <TabContainer>
                <TabItemLabel focused={focused}>{Strings.FEED_COMMUNITY}</TabItemLabel>
              </TabContainer>
            );
          },
          tabBarIcon: ({ focused }) => (
            <SvgIcon shape={'COMMUNITY'} color={focused ? '#0A2138' : '#dee2eb'} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? -10 : 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
});

export default BottomTabNavigator;

const TabItemLabel = styled.Text`
  color: ${(props) => (props.focused ? '#0A2138' : '#dee2eb')};
  font-size: 10px;
  padding-bottom: 35px;
`;
const TabContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
