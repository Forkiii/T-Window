import { Stack } from "expo-router";
import React, { ReactNode } from "react";
import { styles } from "../constants/styles";
import { View } from "react-native";

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout  ({ children }: RootLayoutProps) {

  return (
    <View style={styles.container}>
      <Stack  />
    </View>
  );
};