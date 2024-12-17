import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { styles } from '../../constants/styles';

export default function TabLayout() {
  return (
    <>
    <View style={styles.container}>
  
        <Tabs screenOptions={{ tabBarActiveTintColor: 'red', headerShown: false }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }} />

        </Tabs>
        </View>
    </>
    
  );
}
