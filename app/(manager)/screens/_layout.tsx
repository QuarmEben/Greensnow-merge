import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import tw from "twrnc";
import UserHeader from '../components/UserHeader';
import { images } from '@/assets/images';
import { HeaderScreens } from './components/HeaderScreens';

export default function ShiftsLayout() {

  return (
    <View style={tw`flex-1 overflow-hidden flex-col px-3 pt-0.5 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <HeaderScreens />
        <Stack>
            <Stack.Screen name='UserProfileDetails' options={{ headerShown: false }} />
            <Stack.Screen name='UserPending' options={{ headerShown: false }} />
            <Stack.Screen name='PersonalInfo' options={{ headerShown: false }} />
            <Stack.Screen name='UserImage' options={{ headerShown: false }} />
            <Stack.Screen name='IdentityVerification' options={{ headerShown: false }} />
            <Stack.Screen name='UserImageApproved' options={{ headerShown: false }} />
            <Stack.Screen name='CreateShift' options={{ headerShown: false }} />
            <Stack.Screen name='CreateShiftContinued' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftsCompleted' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftDetailsPreview' options={{ headerShown: false }} />
            <Stack.Screen name='ProfileDetailsEmployer' options={{ headerShown: false }} />
            <Stack.Screen name='ProfileDetailsEmployee' options={{ headerShown: false }} />
        </Stack>
    </View>
  );
}
