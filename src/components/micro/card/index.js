import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Card() {
  return (
    <View style={styles.card}>
      <View style={styles.title_section}>
        <Text style={styles.title}>Market Research</Text>
      </View>
      <Text style={styles.paragraph}>Grocery shopping app design</Text>
      <View style={styles.title_section}>
        <Text style={styles.paragraph}>10:00 AM</Text>
        <TouchableOpacity
          onPress={() => router.push("/task/new")}
          style={styles.button_container}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 15,
  },
  title_section: {
    display: "flex",
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 700,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },

  button_container: {
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#8B78FF",
    height: 35,
    width:80
  },
});
