import axios from "../helpers/axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryNews from "./CategoryNews";

const BottomNews = ({ activeTab }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`api/article/getByTopic?topic=${activeTab ? activeTab.toLowerCase() : "news"}`)
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {articles.map((article) => (
          <CategoryNews
            key={article.id}
            title={article.title}
            image={article.media}
            site={article.rights}
            author={article.author}
            excerpt={article.excerpt}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default BottomNews;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
});
