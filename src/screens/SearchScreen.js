import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, errorMsg, results] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={{ flex: 1 }}> === <>
    <>
      <SearchBar
        term={searchTerm}
        // {(newTerm) => setSearchTerm(newTerm)} === {setSearchTerm}
        onChangeTerm={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMsg ? <Text style={styles.textStyle2}>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultList result={filterResultsByPrice("$")} title="Cost Effective" />
        <ResultList result={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultList result={filterResultsByPrice("$$$")} title="Big Spender" />
        <ResultList result={filterResultsByPrice("$$$$")} title="Expensive" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 10,
  },
  textStyle2: {
    color: "red",
    fontStyle: "italic",
  },
});

export default SearchScreen;
