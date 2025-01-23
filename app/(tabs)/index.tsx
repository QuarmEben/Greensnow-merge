import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Home from './Home';
import HomePostedShifts from './HomeEmployerNonePostedShifts';
import HomeNoneShiftsTaken from './HomeEmployerNoneShiftsTaken';
import HomeBeingVerified from './HomeBeingVerified';
import HomeNoPost from './HomeNoPost';
import { ShiftDetailsPreview } from './ShiftDetailsPreview';
import ShiftsCompleted from './ShiftsCompleted';
import { UpComingShiftDetails } from './UpComingShiftDetails';
import { UpComingShiftDetailsBegan } from './UpComingShiftDetailsBegan';
import CreateShiftScreen from './CreateShift';
import CreateShiftContinuedScreen from './CreateShiftContinued';
import RateCompletedShiftScreen from './RateCompletedShift';
import { NotificationsEmpty } from './NotificationsEmpty';
import Notifications from './Notifications';
import { CompletedShiftDetails } from './CompletedShiftDetails';
import ShiftPickerDetails from './ShiftPickerProfile';

export default function HomeScreen() {
  return <CreateShiftContinuedScreen />
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
