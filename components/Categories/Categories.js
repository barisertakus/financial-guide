import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Category from "./Category";

const categories = [
  "News",
  "Sport",
  "Tech",
  "World",
  "Finance",
  "Politics",
  "Business",
  "Economics",
  "Entertainment",
  "Beauty",
  "Travel",
  "Music",
  "Food",
  "Science",
  "Gaming",
  "Energy",
];

const Categories = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, id) => (
          <Category
            key={id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name={category}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
