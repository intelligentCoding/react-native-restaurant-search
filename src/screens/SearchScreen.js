import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
      return results.filter(result => {
          return result.price === price;
      })
  }
  console.log(results[0])
  return (
    <View >
      <SearchBar 
      term={term} 
      onTermSubmitted = {() => searchApi(term)}
      onTermChange={setTerm} 
      />

      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
      <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
