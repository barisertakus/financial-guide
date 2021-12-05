// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNav from "./screens/HomeNav";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="homeNav" component={HomeNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
