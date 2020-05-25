import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function card({ children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    // padding: 4,
  },
  cardContent: {
    // marginHorizontal: 18,
    // marginVertical: 10,
    padding: 15,
  },
});
