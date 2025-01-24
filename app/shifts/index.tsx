import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ShiftDetailsJobCard from './components/ShiftDetailsJobCard';


import tw from "twrnc";
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (

    
  <View style={tw`flex-1 items-center justify-center bg-white`}>
    <Text>Hello World</Text>
    <Link href={"/shifts/ShiftsWithPosts"}>Click Me</Link> 
  </View>
 
);
}