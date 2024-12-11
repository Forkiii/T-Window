import colors from "@/constants/colors";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
// Properly type the children prop
interface RootLayoutProps {
  children: ReactNode; 
}

const RootLayout = ({ children }: RootLayoutProps) => {
 const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: "center", 
      alignItems: "center", 
    },
  });

  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default RootLayout;
