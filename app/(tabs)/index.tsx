import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Home from './Home';
import ShiftDetailsJobCard from '../components/ShiftDetailsJobCard';
import ShiftsNoPosts from './Shifts';
import History from './History';


export default function HomeScreen() {
  return <Home />
}