import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import LatestCard from "./LatestCard";

const LatestNews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Latest News</Text>
        <TouchableOpacity style={styles.allButton}>
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
        <LatestCard />
        <LatestCard />
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
