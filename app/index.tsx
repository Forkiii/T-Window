
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from './_layout';
export default function Index() {
  return (
    <View style={styles.container} >
      <Text style={styles.headingOne}>Index</Text>
      <Link href={'../SignIn'}><Text style={styles.paragraphOne}>gotosignin</Text></Link>
    </View>
  );
} 