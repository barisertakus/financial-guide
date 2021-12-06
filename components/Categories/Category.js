import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Category = ({ name, activeTab, setActiveTab }) => {
  const handlePress = () => {
    setActiveTab(name);
  };

  return (
    <TouchableOpacity
      style={styles(activeTab, name).container}
      onPress={handlePress}
    >
      <Text style={styles(activeTab, name).text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = (activeTab, name) =>
  StyleSheet.create({
    container: {
      backgroundColor: activeTab !== name ? "white" : "#FF3A44",
      padding: 10,
      paddingHorizontal: 15,
      marginRight: 10,
      borderRadius: 20,
    },
    text: {
      color: activeTab !== name ? "black" : "white",
      fontSize: 14,
    },
  });
