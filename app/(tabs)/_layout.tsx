import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';
export default function TabLayout() {
  return (
<View style={[{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }]}>
 
<Tabs
  screenOptions={{
    tabBarActiveTintColor: colors.secondary,
    tabBarInactiveTintColor: colors.text,
    tabBarStyle: {
    backgroundColor: colors.accent,

    },
    headerShown: false,
  }}
>
<Tabs.Screen
        // name was index, instead, it should've been the file name
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}  
        />

<Tabs.Screen
        // name was index, instead, it should've been the file name
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}  
        />

        
<Tabs.Screen
        // name was index, instead, it should've been the file name
        name="socials"
        options={{
          title: 'Socials',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="group" color={color} />,
        }}  
        />
</Tabs>

</View>
     
  
    
  );
}
