import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../constants/styles";
import {StatusBar} from 'expo-status-bar'

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={"../home"}>
        <Text style={[styles.headingTwo]}>go to home</Text>
      </Link>
    </SafeAreaView>
  );
}
