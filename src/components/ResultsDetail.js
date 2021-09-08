import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.textStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 5,
    marginBottom: 3,
  },
  textStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
