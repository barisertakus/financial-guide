import axios from "../helpers/axios";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryNews from "./CategoryNews";

const BottomNews = ({ activeTab, navigation }) => {
  const [articles, setArticles] = useState([]);

  const navigateToDetails = (article) => {
    navigation.navigate("details", {
      title: article.excerpt,
      imageUrl: article.media,
      author: article.author,
      content: article.summary,
    })
  }

  useEffect(() => {
    axios
      .get(
        `api/article/getByTopic?topic=${
          activeTab ? activeTab.toLowerCase() : "news"
        }`
      )
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {articles.map((article) => (
          <TouchableOpacity key={article.id} onPress={()=>navigateToDetails(article)} activeOpacity={0.4}>
            <CategoryNews
              title={article.title}
              image={article.media}
              site={article.rights}
              author={article.author}
              excerpt={article.excerpt}
            />
          </TouchableOpacity>
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
