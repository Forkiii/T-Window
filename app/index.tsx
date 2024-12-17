
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../constants/styles';
export default function Index() {
  return (
   
       
    <View style={styles.container} >
      <SafeAreaView> 
      </SafeAreaView>
      <Link href={'../SignUp'}><Text
      style={[styles.headingTwo]}>gotosignin</Text></Link>
    </View>
  );
} 