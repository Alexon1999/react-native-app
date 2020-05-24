import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

//+ React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// + Components
import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";
import About from "./screens/About";

// import {
//   HomeStackNavigation,
//   AboutStackNavigation,
//   RootDrawNavigator,
// } from "./routes/React_Navigations";
import RootDrawNavigator from "./routes/React_Navigations";

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const getFonts = () =>
  Font.loadAsync({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <RootDrawNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
