import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Button({ children, route, submit }) {
  return (
    <TouchableOpacity
      style={styles.button_container}
      onPress={() => {
        submit();
        router.push(route);
      }}
    >
      <Text style={styles.button}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button_container: {
    borderRadius: 100,
    backgroundColor: "black",
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  button: {
    fontWeight: "600",
    color: "white",
    fontSize: "25px",
    fontFamily: "Poppins_600SemiBold",
  },
});
