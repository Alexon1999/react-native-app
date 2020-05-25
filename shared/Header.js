import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

// export default () => {}
export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      {/* Icon for the menu */}
      <MaterialIcons
        name="menu"
        size={28}
        color="black"
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerContent}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },

  headerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },

  headerImage: {
    width: 26,
    height: 26,
    marginRight: 10,
  },

  icon: {
    position: "absolute",
    left: 0,
  },
});
