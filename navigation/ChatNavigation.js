import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigation from "./MainNavigation"
import ChatRoomScreen from "../screens/ChatRoom";

const Stack = createStackNavigator();

function ChatNavigation() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false
        }}
      >
        <Stack.Screen name="Tab" component={MainNavigation} />
        <Stack.Screen name="Detail" component={ChatRoomScreen} />
      </Stack.Navigator>
  );
}

export default ChatNavigation;
