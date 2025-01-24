import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import tw from "twrnc";
import UserHeader from '../components/UserHeader';
import { images } from '@/assets/images';
import { ShiftsHeader } from './components/ShiftsHeader';

export default function ShiftsLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={tw`flex-1 overflow-hidden flex-col px-3 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <ShiftsHeader />
        <Stack>
            <Stack.Screen name='CreateShift' options={{ headerShown: false }} />
            <Stack.Screen name='CompletedShiftDetails' options={{ headerShown: false }} />
            <Stack.Screen name='CreateShiftContinued' options={{ headerShown: false }} />
            <Stack.Screen name='RateCompletedShift' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftDetailsPreview' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftPickerProfile' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftsCompleted' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftsWithPosts' options={{ headerShown: false }} />
            <Stack.Screen name='UpComingShiftDetails' options={{ headerShown: false }} />
            <Stack.Screen name='UpComingShiftDetailsBegan' options={{ headerShown: false }} />
        </Stack>
    </View>
  );
}
