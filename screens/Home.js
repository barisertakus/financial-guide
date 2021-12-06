import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNews from "../components/BottomNews";
import Categories from "../components/Categories/Categories";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar />
        <LatestNews />
        <Categories />
        <BottomNews />
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
