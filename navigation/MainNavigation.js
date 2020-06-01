import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Chat from "../screens/Chat";


const Tab = createBottomTabNavigator();

const getHeaderName = route =>
  route?.state?.routeNames[route.state.index] || "Home";

function MainNavigation({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route)
    })
  })

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}

export default MainNavigation;
