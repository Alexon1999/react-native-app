import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import GlobalStyles from "../styles/Global";
import Globalstyles from "../styles/Global";
import { useNavigation, useRoute } from "@react-navigation/native";

const ReviewDetails = () => {
  // { navigation, route } //// pareil , on met comme props
  const navigation = useNavigation();
  const route = useRoute();

  const pressHandler = () => {
    // navigation.popToTop(); //// Go back to first screen in stack
    navigation.goBack();
  };

  //+ Route :  pour recuperer les donnes passés par des routes (component)

  return (
    <View style={Globalstyles.container}>
      <Text>{route.params?.title}</Text>
      <Text>{route.params?.body}</Text>
      <Text>{route.params?.rating}</Text>

      <Button title="Back to home" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewDetails;
