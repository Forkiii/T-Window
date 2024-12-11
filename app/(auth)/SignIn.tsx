import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { Line } from 'react-native-svg';
import Group from '../../assets/Group';
import HomeIcon from '../../assets/Home';
import Profile from '../../assets/Profile';
import { styles } from './_layout';
export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingOne}>SignIn</Text>
<Link href={'../'}><Text style={styles.paragraphOne}></Text></Link>
  <View style={styles.footer} >
      <HomeIcon></HomeIcon> <Profile></Profile> <Group></Group> <Line></Line>
      </View>
    </View>
  )
}