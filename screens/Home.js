import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import GlobalStyles from "../styles/Global";
import Card from "../shared/card";
import { ReviewForm } from "./ReviewForm";

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

  // + Add Review
  const addReview = (review) => {
    review.key = Math.floor(Math.random() * 10000).toString();
    console.log(review.key);
    setReviews((prevReviews) => [review, ...prevReviews]);

    //+  et on ferme le modal
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={GlobalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            name="close"
            size={28}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={28}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          ////deuxieme parametre est un object
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviwDetails", item)}
          >
            <Card>
              <Text style={GlobalStyles.titleText}>{item.title}</Text>
            </Card>
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

const styles = StyleSheet.create({
  modalToggle: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#444",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    borderColor: "#f2f2f2",
    marginBottom: 0,
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
  },
});
export default Home;
