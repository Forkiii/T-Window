import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "../constants/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"../home"}>
        <Text style={[styles.headingTwo, styles.center]}>home</Text>
      </Link>
      </View>
  );
}
