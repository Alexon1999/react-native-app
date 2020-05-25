import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import Globalstyles from "../styles/Global";
import Card from "../shared/card";

const ReviewDetails = () => {
  // { navigation, route } //// pareil , on met comme props
  const navigation = useNavigation();
  const route = useRoute();

  const pressHandler = () => {
    // navigation.popToTop(); //// Go back to first screen in stack
    navigation.goBack();
  };

  //+ Route : params  pour recuperer les donnes passés par des routes (component)
  // console.log(route.name);

  const rating = route.params?.rating;
  return (
    <View style={Globalstyles.container}>
      <Card>
        <Text>{route.params?.title}</Text>
        <Text>{route.params?.body}</Text>

        <View style={styles.rating}>
          <Text>GameZone rating : </Text>
          <Image source={images.ratings[rating]} />
          <Text>{route.params?.rating}</Text>
        </View>
      </Card>
      <Button title="Back to home" onPress={pressHandler} />
    </View>
  );
};

const images = {
  ratings: {
    "1": "require(../assets/rating-1.png)",
    "2": "require(../assets/rating-2.png)",
    "3": "require(../assets/rating-3.png)",
    "4": "require(../assets/rating-4.png)",
    "5": "require(../assets/rating-5.png)",
  },
};
const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    // borderWidth: 1, ///// partout
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
});

export default ReviewDetails;
