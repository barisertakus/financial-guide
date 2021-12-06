import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryNews from "./CategoryNews";

const BottomNews = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryNews imageName={require(`../assets/images/news3.png`)} />
        <CategoryNews imageName={require(`../assets/images/news4.png`)}/>
        <CategoryNews imageName={require(`../assets/images/news5.png`)}/>
      </ScrollView>
    </View>
  );
};

export default BottomNews;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1
  },
});
