import { View, Text, Image } from 'react-native'
import { Tabs, Redirect, } from 'expo-router'
import React from 'react'
import Group from '../../assets/Group'




const TabsLayout = () => {

    const tabIcon = ({icon, color, name, focused}) =>{
        return (
            <View>
                <Image src='' />
            </View>
        )
    }

  return (
    <>
    <Tabs>
        <Tabs.Screen
         name='home'
         options={{
            title:'Home',
            headerShown:false,
            // tabBarIcon:({color, focused}) => (
            // )
        }}
        />
        
    </Tabs>
    </>
  )
}

export default TabsLayout