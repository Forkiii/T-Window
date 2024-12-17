import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Button from "../../components/button";
import colors from "../../constants/colors";
import { styles } from "../../constants/styles";

export default function SignUp() {

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
           
        <Text style={[styles.paragraphOne, styles.inputSpacing]}>
          Confirm Password
        </Text>
        <TextInput
          style={[styles.inputLine,styles.input, styles.paragraphTwo]}
          secureTextEntry={true}
          placeholderTextColor={colors.text}
        />
           
       
      </View>

      {/* Button  */}
      <Button buttonText="Sign up" style={styles.buttonSpacing} />
  
        <Link href={"../SignIn"} style={[styles.paragraphThree, styles.labelCenter]}> 
        Already have an account?
        </Link>

 
      
    </SafeAreaView>
  );
}


