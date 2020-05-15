import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from "../screens/Auth";


const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
