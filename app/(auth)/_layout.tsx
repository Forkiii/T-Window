import { Stack } from "expo-router";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


interface RootLayoutProps {
  children: ReactNode; 
}

const RootLayout = ({ children }: RootLayoutProps) => {

  return (
    <Stack>
      <Stack.Screen options={{headerShown:true}} />
    </Stack>
  );
};
export  const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    
  },
  footer:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    bottom:0
  },
  headingOne: {
    fontSize: 40,
    color: colors.text,
    fontFamily: "Kanit",  
  },
  headingThree: {
    fontSize: 40,
    color: colors.text,
    fontFamily: "Kanit",
  },
  
  headingTwo: {
    fontSize: 40,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphOne:{
    fontSize: 12,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphTwo: {
    fontSize: 11,
    color: colors.text,
    fontFamily: "Kanit",
  },
  paragraphThree: {
    fontSize: 10,
    color: colors.text,
    fontFamily: "Kanit",
  },
});