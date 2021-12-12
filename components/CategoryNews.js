import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const CategoryNews = ({image, title, author}) => {
  return (
    <ImageBackground
      source={{uri: image}}
      style={styles.cardImageContainer}
      imageStyle={styles.cardImage}
    >
      <View style={styles.imageTopTextContainer}>
        <Text style={styles.imageTopText}>
          {title}
        </Text>
      </View>
      <View style={styles.imageBottomTextContainer}>
        <Text style={styles.imageBottomText}>
          {author}
        </Text>
        <Text style={styles.imageBottomText}>
          Sunday 9 May 2021
        </Text>
      </View>

    </ImageBackground>
  )
}

export default CategoryNews

const styles = StyleSheet.create({
  cardImageContainer: {
    height: 150,
    marginLeft: 0,
    marginBottom: 10,
  },
  cardImage: {
    borderRadius: 10,
  },
  imageTopTextContainer: {
    position: "absolute",
    top: 10,
    left: 15,
    right: 0,
    justifyContent: "center",
  },
  imageBottomTextContainer:{
    position: "absolute",
    left: 15,
    right: 15,
    bottom: 10,
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  imageTopText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageBottomText:{
    color: "white",
    fontSize: 12
  }
})
