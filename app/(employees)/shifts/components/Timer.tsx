import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { TimerProps } from './types';

const TimerApp: React.FC<TimerProps>= ({ initialTime }) => {
  const [time, setTime] = useState<number>(initialTime); // Time in minutes
  const [formattedTime, setFormattedTime] = useState<string>('00:00');
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
   
    
    const intervalId = setInterval(() => {
      setTime(prevTime => {
         //stop timer when it hits 0
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });// decrease time by 1 minute
    }, 1000); // Update every minute (60000ms = 1 minute)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Convert total minutes into hours and minutes
    const hours = Math.floor(time / 60); // Get the full hours
    const minutes = time % 60; // Get the remaining minutes

    // Format time as HH:MM
    setFormattedTime(
      `${String(hours).padStart(2, '0')} hours ${String(minutes).padStart(2, '0')} minutes`
    );
  }, [time]);

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg font-bold tracking-tight text-center`}>{formattedTime}</Text>
    </View>
  );
};

export default TimerApp;
