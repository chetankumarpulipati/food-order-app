import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuantityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Quantity Screen</Text>
    </View>
  );
};

export default QuantityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
