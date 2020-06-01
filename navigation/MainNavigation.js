import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";

          if (route.name === "Home") {
            iconName += "home";
          } else if (route.name === "Chat") {
            iconName += "chatboxes";
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        }
      })}

      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black"
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}

export default MainNavigation;
