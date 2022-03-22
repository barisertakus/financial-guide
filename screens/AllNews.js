import axios from "../helpers/axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import BottomNews from "../components/BottomNews";
import { SafeAreaView } from "react-native-safe-area-context";

const AllNews = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSearchResults = () => {
    setLoading(true);
    axios
      .get("api/article/search?search=" + search)
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = getSearchResults();

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleClick={getSearchResults}
        />
        <Text style={styles.text}>All News</Text>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#00ff00"
            style={styles.loading}
          />
        ) : (
          <FlatList
            data={articles}
            renderItem={() => <BottomNews navigation={navigation} />}
            pagingEnabled
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AllNews;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingTop: "5%",
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
