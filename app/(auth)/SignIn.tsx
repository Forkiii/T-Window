import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Button from "../../components/button";
import colors from "../../constants/colors";
import { styles } from "../../constants/styles";

export default function SignIn() {

  return (
    <SafeAreaView style={[styles.container]}>
      {/* Input Fields */}
    
        
      <View style={[styles.inputWrapper, styles.inputSpacing]}>
        
        <Text style={[styles.paragraphOne]}>Username</Text>
        <TextInput
        
          style={[styles.inputLine,styles.input,styles.paragraphTwo]}
       
          placeholderTextColor={colors.text}
        />
           

        {/* Overlay the input */}
        <Text style={[styles.paragraphOne, styles.inputSpacing]}>Password</Text>
        <TextInput
          style={[styles.inputLine,styles.input,styles.paragraphTwo]}
          secureTextEntry={true}
          placeholderTextColor={colors.text}
        />
      </View>

      {/* Button  */}
      <Link href={"../home"}>
      <Button buttonText="Sign In" style={styles.buttonSpacing}
      />
      </Link>





        <Link href={"../SignUp"} style={[styles.paragraphThree, styles.labelCenter]}> 
      <Text style={[styles.paragraphThree, styles.labelCenter]}>
        Don't have an account?
      </Text>
    </Link>
      
    </SafeAreaView>
  );
}
