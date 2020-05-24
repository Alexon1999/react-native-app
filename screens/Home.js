import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import GlobalStyles from "../styles/Global";

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta catch Them All(again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3 ",
    },
  ]);

  const pressHandler = (text) => {
    // navigation.push(text); //// on le fait nous meme , explicitement
    //+  Stack Navigator : quand on ajoute on fait push et elever c'est pop

    navigation.navigate(text);
  };

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          ////deuxieme parametre est un object
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviwDetails", item)}
          >
            <Text style={GlobalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        color="dodgerblue"
        title="Go to Reviews"
        onPress={() => pressHandler("ReviwDetails")}
      />
      {/* <Button title="About" onPress={() => pressHandler("About")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
export default Home;
