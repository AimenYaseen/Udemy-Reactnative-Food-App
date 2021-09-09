import React, { useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, Image, View } from "react-native";
import Yelp from "../api/Yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    try {
      const response = await Yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      setErrorMsg("Something Bad Happens");
    }
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      {errorMsg ? <Text style={styles.textStyle2}>{errorMsg}</Text> : null}
      <Text style={styles.textStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageStyle: {
    height: 180,
    width: 320,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  textStyle: {
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
    fontSize: 18,
  },
  textStyle2: {
    color: "red",
    fontStyle: "italic",
  },
});

export default ResultShowScreen;
