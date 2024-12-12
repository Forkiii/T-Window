import { Stack } from "expo-router";
import React, { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode; 
}

const RootLayout = ({ children }: RootLayoutProps) => {

  return (
    <Stack>
      <Stack.Screen options={{headerShown:true}} />
    </Stack>
  );
};