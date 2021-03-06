import axios from "../helpers/axios";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import LatestCard from "./LatestCard";

const LatestNews = ({ articles, navigation }) => {
  const navigateToDetails = (article) => {
    navigation.navigate("details", {
      title: article.excerpt,
      imageUrl: article.media,
      author: article.author,
      content: article.summary,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Latest News</Text>
        <TouchableOpacity style={styles.allButton} onPress={()=>navigation.navigate("AllNews")}>
          <Text style={styles.regularText}>See All</Text>
          <Icon
            name="arrow-forward"
            size={24}
            color="#0080FF"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.news}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {articles.map((article) => (
          <TouchableOpacity
            key={article.id}
            onPress={() => navigateToDetails(article)}
            activeOpacity={0.4}
          >
            <LatestCard
              title={article.title}
              image={article.media}
              site={article.rights}
              excerpt={article.excerpt}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LatestNews;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  regularText: {
    color: "#0080FF",
    fontWeight: "bold",
  },
  allButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 15,
  },
  news: {
    marginTop: 10,
  },
  cards: {},
});
