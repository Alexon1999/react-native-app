import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// + Components
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: "dodgerblue",
          height: 60,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // headerTitleAlign: "center",
        // headerStatusBarHeight: 10,
        // headerShown: false, // enlevez ce header par defaut
      }}
    >
      {/* on applique le style à tous les screens // Common styles*/}

      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header title="My Home" navigation={navigation} />
            ),
            headerStyle: {
              // backgroundColor: "coral",
              height: 60,
            },
          };
        }}
      />
      <Stack.Screen
        name="ReviwDetails"
        component={ReviewDetails}
        options={{ title: "All Reviews" }} //// title : prend que string , headertitle peut prendre fonction
      />
    </Stack.Navigator>
  );
};

export const AboutStackNavigation = () => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          // backgroundColor: "dodgerblue",
          height: 60,
        },
      }}
    >
      <AboutStack.Screen
        name="ReviwDetails"
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header title="About Us" navigation={navigation} />
            ),
          };
        }}
      />
    </AboutStack.Navigator>
  );
};

const RootDrawNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigation} />
      <Drawer.Screen name="About" component={AboutStackNavigation} />
    </Drawer.Navigator>
  );
};

export default RootDrawNavigator;
