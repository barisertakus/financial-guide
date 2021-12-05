import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const LatestCard = () => {
  return (
    <ImageBackground 
      source={require("../assets/images/news1.png")}
      style={styles.cardImageContainer}
      imageStyle={styles.cardImage}
    >
      <View style={styles.imageCenterTextContainer}>
        <Text style={styles.imageCenterText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
          porta sodales.
        </Text>
      </View>
      <View style={styles.imageBottomTextContainer}>
        <Text style={styles.imageBottomText}>
          Bottom Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
          porta sodales.
        </Text>
      </View>

    </ImageBackground>
  );
};

export default LatestCard;

const styles = StyleSheet.create({
  cardImageContainer: {
    width: 300,
    height: 200,
    margin: 10,
    marginLeft: 0
  },
  cardImage: {
    borderRadius: 10,
  },
  imageCenterTextContainer: {
    position: "absolute",
    top: 0,
    left: 15,
    right: 0,
    bottom: 0,
    justifyContent: "center",
  },
  imageBottomTextContainer:{
    position: "absolute",
    left: 15,
    right: 0,
    bottom: 10,
    justifyContent: "center",
  },
  imageCenterText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageBottomText:{
    color: "white",
    fontSize: 12
  }

});
