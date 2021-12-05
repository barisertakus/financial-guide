import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchBar />
        {/* Notification ? */}
        {/* Latest News */}
        {/* Categories */}
        {/* Other news */}
        <Text>Home</Text>
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
