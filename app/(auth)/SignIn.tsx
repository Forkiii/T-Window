import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './_layout'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingOne}>SignIn</Text>
      <Link href={'../'}><Text style={styles.paragraphOne}>gotosignin</Text></Link>

    </View>
  )
}