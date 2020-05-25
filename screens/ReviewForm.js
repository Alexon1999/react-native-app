import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import Globalstyles from "../styles/Global";
import FlatButton from "../shared/Button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export const ReviewForm = ({ addReview }) => {
  const handleFocus = ({ target }) => {
    target.style = { borderColor: "green" };
  };

  return (
    <View style={Globalstyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
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
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={Globalstyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={70}
              style={[Globalstyles.input, Globalstyles.titleText]}
              placeholder="Review body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={Globalstyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              keyboardType="numeric"
              style={{ ...Globalstyles.input, ...Globalstyles.titleText }} //+pareil
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={Globalstyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            {/* <Button
              title="submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            /> */}
            {/*  customized button */}
            <FlatButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};
