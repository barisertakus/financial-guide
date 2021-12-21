import axios from "../helpers/axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNews from "../components/BottomNews";
import Categories from "../components/Categories/Categories";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";

const Home = ({navigation}) => {

  const [activeTab, setActiveTab] = useState("");
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  const getSearchResults = () => {
    axios
      .get("api/article/searchLatest?search=" + search)
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    getSearchResults();
  },[])


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar search={search} setSearch={setSearch} handleClick={getSearchResults}  />
        <LatestNews articles={articles} navigation={navigation} />
        <Categories activeTab={activeTab} setActiveTab={setActiveTab} />
        <BottomNews activeTab={activeTab} navigation={navigation} />
        {/* Bottom Nav */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
  },
  container: {
    paddingTop: "5%",
    flex:1,
  },
});
