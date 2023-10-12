import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../micro/button";
import { router } from "expo-router";

export default function LogIn() {
  const handleSubmit=()=>{
    console.log("submitted")
  }
  const image = require("../../../assets/login.png");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <View style={styles.nav}>
            <Ionicons
              name="chevron-back-circle"
              size={45}
              color="black"
              onPress={() => router.back()}
            />
          </View>
          <View style={styles.text_container}>
            <Text style={styles.heading_one}>Welcome Back!</Text>
            <Text style={styles.text}>Enter your username & password</Text>
          </View>
        </View>

        <ImageBackground
          source={image}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.input}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email address"
              placeholderTextColor="#6B6B6B"
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#6B6B6B"
            />
          </View>
          <View style={styles.wrapper}>
            <Button route="home" submit={handleSubmit} >LOGIN</Button>
            <View style={styles.forgot_password}>
              <Text style={styles.cta}>Forgotten Passwoard?</Text>
              <Link href="/signup">
                <Text style={styles.cta}>Or Create A New Account</Text>
              </Link>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
  },
  nav: {
    paddingLeft: 8,
  },
  backgroundImage: {
    height: Dimensions.get("window").height,
  },
  heading_one: {
    fontSize: "35px",
    fontWeight: "700",
    fontFamily: "Poppins_600SemiBold",
  },
  text_container: {
    marginTop: 20,
    padding: 10,
  },

  input: {
    marginTop: 25,
    padding: 10,
  },

  text: {
    fontSize: "20px",
    fontFamily: "Poppins_600SemiBold",
    color: "#8D8D8D",
    paddingTop: 5,
    marginBottom: 20,
  },

  wrapper: {
    marginTop: 60,
    display: "flex",
    alignItems: "center",
  },
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
    fontSize: "30px",
    fontFamily: "Poppins_600SemiBold",
  },
  cta: {
    fontSize: 17,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 6,
    textAlign: "center",
    color: "#6B6B6B",
  },
  forgot_password: {
    marginTop: 14,
    fontSize: "20px",
  },
  TextInput: {
    height: 40,
    marginTop: 50,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 25,
  },
});
