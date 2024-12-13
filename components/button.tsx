import { default as React, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';
const Button = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
    onPressIn={() =>{
      setIsPressed(true)}}
    onPressOut={() => {
      setTimeout(() => {
        setIsPressed(false);
      }, 10); 
    }}
      style={isPressed ? [styles.container, styles.btnPressed] : styles.container}  >
      <Text style={styles.btnText}>{props.buttonText}</Text>
    </Pressable>
  );
};
export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor: `${colors.primary}`,
        width:280,
        alignContent: 'center',
        justifyContent:'center',
        padding:10,
    },
    btnPressed:{
      backgroundColor: `${colors.secondary}`,
    },
    btnText:{
        textAlign:'center',
        fontFamily:"Kanit",
        color:`${colors.text}`,
    }
})