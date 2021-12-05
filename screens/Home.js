import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchBar />
        <LatestNews />
        {/* Latest News */}
        {/* Categories */}
        {/* Other news */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: "5%"
  },
});
