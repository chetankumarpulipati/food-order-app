import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderSuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Order Success Screen</Text>
    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
