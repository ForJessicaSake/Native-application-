import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { signUp } from "../firebase";
import { Link, router } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../micro/button";

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const image = require("../../../assets/login.png");

  const handleSubmit=()=>{
    signUp(email, password)
    console.log("submitted")
  }
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
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              style={styles.TextInput}
              route="login"
              placeholder="Password"
              placeholderTextColor="#6B6B6B"
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <View style={styles.wrapper}>
            <Link href="/login">
              <Button submit={handleSubmit}>SIGN UP</Button>
            </Link>
            <View style={styles.forgot_password}>
              <Text style={styles.cta}>Forgotten Passwoard?</Text>
              <Link href="/login">
                <Text style={styles.cta}> Aleady Have An Account? Login</Text>
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
