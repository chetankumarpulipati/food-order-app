import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RestaurantScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Restaurant Screen</Text>
    </View>
  );
};

export default RestaurantScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});