import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "../constants/styles";

export default function Index() {
  return (
    <View style={styles.container}>

<Text style={[styles.headingTwo, styles.header]}>Welcome to T-Window</Text>

      <Link href={"../signup"}>
      
      <Text style={[styles.headingTwo, styles.center]}>Join T-Window</Text>
      </Link>
      </View>
  );
}
