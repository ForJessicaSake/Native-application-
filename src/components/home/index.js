import React from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.navigation}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => router.back()}>
              <Image source={require("../../../assets/Menu.png")} />
            </TouchableOpacity>
            <Text style={styles.date}>
              {months[today.getMonth()]}, {today.getDate()}{" "}
              {today.getFullYear()}
            </Text>
          </View>
          <Image source={require("../../../assets/Profile.jpg")} />
        </View>
        <View style={styles.user}>
          <View style={styles.navigation}>
            <View>
              <Text style={styles.heading_one}>Hi Jessica.</Text>
              <Text style={styles.text}>10 tasks are pending</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/task/new")}
              style={styles.button_container}
            >
              <Ionicons name="add-outline" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.task}>
            <Text style={styles.task_text}>Task title</Text>
            <Text style={styles.task_text}>
              random task description goes here...
            </Text>
          </View>
        </View>
        <View style={styles.monthly_preview}>
          <Text style={styles.heading_one}>Monthly Preview</Text>
          <View style={styles.row}>
            <Link href="/task">
              <View style={styles.box}>
                <Text style={styles.box_text}>22</Text>
                <Text style={styles.box_description}>Completed</Text>
              </View>
            </Link>
            <View style={styles.box_two}>
              <Text style={styles.box_text}> 7</Text>
              <Text style={styles.box_description}>In Progress</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.box_three}>
              <Text style={styles.box_text}>10</Text>
              <Text style={styles.box_description}>Pending</Text>
            </View>
            <View style={styles.box_four}>
              <Text style={styles.box_text}>14</Text>
              <Text style={styles.box_description}>Awaiting Review</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  user: {
    paddingTop: 30,
  },
  task: {
    backgroundColor: "#8B78FF",
    height: 80,
    borderRadius: 15,
    padding: 15,
  },
  button_container: {
    height: 40,
    width: 40,
    borderRadius: "100",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#8B78FF",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  task_text: {
    fontSize: "17px",
    color: "white",
    fontWeight: "600",
    marginBottom: 3,
  },

  date: {
    paddingTop: 5,
    fontSize: "18px",
  },

  heading_one: {
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: "Poppins_600SemiBold",
  },

  text: {
    fontSize: "19px",
    fontFamily: "Poppins_600SemiBold",
    color: "#8D8D8D",
    paddingTop: 7,
    marginBottom: 15,
  },
  monthly_preview: {
    paddingTop: 15,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 7,
    paddingTop: 15,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 160,
    borderRadius: 15,
    backgroundColor: "#FF6C97",
  },
  box_two: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 160,
    borderRadius: 15,
    backgroundColor: "#FFB41A",
  },
  box_three: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 160,
    borderRadius: 15,
    backgroundColor: "#8B78FF",
  },
  box_four: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 160,
    borderRadius: 15,
    backgroundColor: "#00F0FF",
  },
  box_text: {
    fontSize: "42px",
    color: "white",
    fontWeight: "700",
  },
  box_description: {
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
    paddingTop: 4,
  },
});
