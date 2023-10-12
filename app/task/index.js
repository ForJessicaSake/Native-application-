import React from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../src/components/micro/card";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="md-chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading_one}>All Your Tasks</Text>
        <Ionicons name="notifications" size={28} color="black" />
      </View>
      <View>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#f2eefd",
    height: "100%",
  },
  navigation: {
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading_one: {
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
});
