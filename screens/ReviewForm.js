import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Globalstyles from "../styles/Global";
import { Formik } from "formik";

export const ReviewForm = ({ addReview }) => {
  const handleFocus = ({ target }) => {
    target.style = { borderColor: "green" };
  };

  return (
    <View style={Globalstyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={[Globalstyles.input, Globalstyles.titleText]}
              placeholder="Review title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
            />
            <TextInput
              multiline
              style={[Globalstyles.input, Globalstyles.titleText]}
              placeholder="Review body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
            />
            <TextInput
              keyboardType="numeric"
              style={{ ...Globalstyles.input, ...Globalstyles.titleText }} //+pareil
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
            />
            <Button
              title="submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
