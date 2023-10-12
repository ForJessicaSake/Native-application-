import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function New() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="md-chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading_one}>Add Task</Text>
        <Ionicons name="notifications" size={28} color="black" />
      </View>
      <View>
        <TextInput
          style={styles.TextInput}
          // multiline={true}
          numberOfLines={4}
          placeholder="Task name"
          placeholderTextColor="#6B6B6B"
        />
        <TextInput
          style={styles.TextArea}
          // multiline={true}
          numberOfLines={4}
          placeholder="Description"
          placeholderTextColor="#6B6B6B"
        />

        <TextInput
          style={styles.TextInput}
          // multiline={true}
          numberOfLines={4}
          placeholder="Start date"
          placeholderTextColor="#6B6B6B"
        />
        <TextInput
          style={styles.TextInput}
          // multiline={true}
          numberOfLines={4}
          placeholder="End date"
          placeholderTextColor="#6B6B6B"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={styles.button_container}
      >
        <Text style={styles.Text}>Create a New Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f2eefd",
    height: "100%",
  },
  navigation: {
    paddingBottom: 12,
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
  Text: {
    fontSize: 23,
    fontWeight: 700,
    color: "white",
  },
  TextInput: {
    height: 70,
    margin: 12,
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    marginTop: 20,
    // textAlign:"top",
    backgroundColor: "white",
  },

  TextArea: {
    height: 70,
    borderRadius: 15,
    marginTop: 20,
    margin: 12,
    backgroundColor: "white",
    padding: 10,
    fontSize: 15,
  },
  button_container: {
    borderRadius: 20,
    backgroundColor: "#6652FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: "100%",
    marginTop: 35,
  },
});
