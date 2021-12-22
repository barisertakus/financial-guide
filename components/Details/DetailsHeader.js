import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsHeader = ({ imageUrl }) => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
            j
          >
            <Icon name="arrow-back-ios" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={{ marginTop: -50 }}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: dimension.width, height: dimension.height / 2 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {},
  back: {
    borderRadius: 10,
    padding: 5,
    paddingRight: 0,
    paddingLeft: 8,
    backgroundColor: "lightgray",
    margin: 20,
  },
});
