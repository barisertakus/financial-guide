import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          placeholder="Search news..."
          rightIcon={<Icon name="magnify" size={24} style={styles.icon} />}
          rightIconContainerStyle={styles.inputRightIconContainer}
        />
      </View>
      <Avatar
        size={37}
        containerStyle={styles.button}
        overlayContainerStyle={{backgroundColor: "red", borderRadius: 50}}
        icon={{ name: "bell-outline", color: "white", size:24, type: "material-community" }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "lightgray",
    height: 40,
  },
  inputStyle: {
    paddingHorizontal: 20,
  },
  inputRightIconContainer: {
    paddingRight: 20,
  },
  icon: {
    color: "gray",
  },
  button: {
    marginHorizontal: 10
  },
});
