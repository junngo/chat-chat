import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Feed from "../screens/Feed";


const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

export default MainNavigation;
