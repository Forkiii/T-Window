
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from '../constants/styles';
export default function Index() {
  return (
   
       
    <View style={styles.container} >
      <Link href={'../SignUp'}><Text
      style={[styles.headingTwo]}>gotosignin</Text></Link>
    </View>
  );
} 