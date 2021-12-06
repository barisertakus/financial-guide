import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Category from "./Category";

const Categories = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Category activeTab={activeTab} setActiveTab={setActiveTab} name="Healthy" />
        <Category activeTab={activeTab} setActiveTab={setActiveTab} name="Technology" />
        <Category activeTab={activeTab} setActiveTab={setActiveTab} name="Finance" />
        <Category activeTab={activeTab} setActiveTab={setActiveTab} name="Arts" />
        <Category activeTab={activeTab} setActiveTab={setActiveTab} name="Sport" />
        <Category activeTab={activeTab} setActiveTab={setActiveTab} name="Entertainment" />
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
