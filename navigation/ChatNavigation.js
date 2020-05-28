import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigation from "./MainNavigation"
import ChatRoomScreen from "../screens/ChatRoom";

const Stack = createStackNavigator();

function ChatNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={MainNavigation} />
        <Stack.Screen name="Detail" component={ChatRoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatNavigation;
