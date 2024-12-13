import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Line from "../../assets/Line";
import Button from "../../components/button";
import colors from "../../constants/colors";
import { styles } from "../../constants/styles";

export default function SignIn() {
  function setText(text: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <SafeAreaView style={[styles.container]}>
      {/* Input Fields */}
      <View style={[styles.inputWrapper]}>
        <Text style={[styles.paragraphOne]}>Username</Text>
        <TextInput
          style={styles.input}
         
          placeholder=":"
          placeholderTextColor={colors.text}
        />
            <Line />

        {/* Overlay the input */}
        <Text style={[styles.paragraphOne, styles.inputSpacing]}>Password</Text>
        <Line />
        <Text style={[styles.paragraphOne, styles.inputSpacing]}>
          Confirm Password
        </Text>
        <Line />
      </View>

      {/* Button  */}
      <Button buttonText="Sign up" style={styles.buttonSpacing} />
      <Text style={[styles.paragraphThree, styles.labelCenter]}>
        Already have an account?
      </Text>
    </SafeAreaView>
  );
}