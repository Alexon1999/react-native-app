import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

// export default () => {}
export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      {/* Icon for the menu */}
      <MaterialIcons
        name="menu"
        size={28}
        color="black"
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
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

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },

  icon: {
    position: "absolute",
    left: 0,
  },
});
