import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';
export default function TabLayout() {
  return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
 
<Tabs
  screenOptions={{
    tabBarActiveTintColor: colors.text,
    tabBarInactiveTintColor: colors.background,
    tabBarStyle: {
    backgroundColor: colors.accent,

    },
    headerShown: false,
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Home',
      tabBarIcon: ({ color }) => (
        <FontAwesome name="home" color={color} size={24} />
      ),
    }}
  />
</Tabs>

</View>
     
  
    
  );
}
