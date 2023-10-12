import React from "react";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const GetStarted = () => {
  const image = "../../../assets/get-started.png";
  return (
    <View style={styles.container} >
      <Image source={require(image)} />
      <View style={styles.text_container}>
        <View>
          <Text style={styles.heading_one}>Manage your Tasks</Text>
          <Text style={styles.text}>
            Organise all your to-do’s andlist your projects. Color tag them to
            set priority and categories{" "}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/login")}
          style={styles.button_container}
        >
          <AntDesign name="arrowright" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
 
  container: {
    display: "flex",
    justifyContent: "space-between",
    border: "20px",
    padding:8
  },

  text_container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 15,
  },
  heading_one: {
    fontSize: "35px",
    fontWeight: "700",
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
  text: {
    fontSize: "18px",
    fontFamily: "Poppins_600SemiBold",
    color: "#8D8D8D",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 15,
    lineHeight:25
  },

  button_container: {
    borderRadius: "100%",
    backgroundColor: "#6652FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
  },
});
