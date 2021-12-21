import React from "react";
import { SafeAreaView, ScrollView, useWindowDimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const DetailsContent = ({ title, content, author }) => {
  const dimensions = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={[styles.headerCard, { width: dimensions.width / 1.2 }]}
            >
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.author}>{"Kaynak : " + (author ? author : "bilinmiyor")}</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.details}>
              <Text style={styles.regularText}>{content}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};
export default DetailsContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
  },
  details: {
    paddingTop: 40,
  },
  headerCard: {
    backgroundColor: "lightgray",
    marginTop: -50,
    minHeight: 100,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  regularText: {
    fontSize: 16,
  },
  author: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
  }
});
