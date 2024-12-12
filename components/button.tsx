import {Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import React from 'react'

const Button = (props) => {
  return (
      <Pressable style={styles.container} onPress={() => alert('pressed')}>
        <Text style={styles.btnText}>{props.buttonText}</Text>
      </Pressable>
    
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor: `${colors.primary}`,
        width:280,
        alignContent: 'center',
        justifyContent:'center',
        padding:10,
    },
    btnText:{
        textAlign:'center',
        color:`${colors.text}`,

    }
})