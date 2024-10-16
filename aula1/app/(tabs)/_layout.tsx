import { Tabs } from 'expo-router';
import React from 'react';
import {Text} from 'react-native';
import { Menu } from '@/components/header';

export default function TabLayout() {

  return (
    <>
      <Menu image={require("../../assets/images/react-logo.png")}></Menu>
      <Tabs>
        <Tabs.Screen name="index" options={{headerShown: false, tabBarIcon: () => (<><Text>🤷</Text></>)}}></Tabs.Screen>
        <Tabs.Screen name="explore" options={{headerShown: false, tabBarIcon: () => (<><Text>👀</Text></>)}}></Tabs.Screen>
        <Tabs.Screen name="list" options={{headerShown: false, tabBarIcon: () => (<><Text>👌</Text></>)}}></Tabs.Screen>
      </Tabs>
    </>
  );
}
