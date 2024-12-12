import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Line from "../../assets/Line";
import { styles } from "../../constants/styles";
import Button from "../../components/button";

export default function SignIn() {
  return (
    <View style={[styles.container]}>
      {/* Username */}
      <Link href={"../"}>
        <Text style={styles.paragraphOne}></Text>
      </Link>
      <View style={styles.inputField}>
        <Text style={[styles.paragraphOne, styles.label]}>Username</Text>
        <Line></Line>
      </View>
      ;{/* Pass */}
      <View style={styles.inputField}>
        <Text style={[styles.paragraphOne, styles.label]}>Password</Text>
        <Line></Line>{" "}
      </View>
      {/* Confirm Pass */}
      <View style={styles.inputField}>
        <Text style={[styles.paragraphOne, styles.label]}>
          Confirm Password
        </Text>
        <Line></Line>
      </View>
      <Button buttonText="Sign up"></Button>
      <Text style={[styles.paragraphThree, styles.labelCenter]}>
        {" "}
        Already have an account?
      </Text>
    </View>
  );
}
