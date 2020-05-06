import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Feed from "../screens/Feed";


const Tab = createBottomTabNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
