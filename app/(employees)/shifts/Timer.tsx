import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const TimerApp: React.FC = () => {
  const [time, setTime] = useState<number>(0); // Time in minutes
  const [formattedTime, setFormattedTime] = useState<string>('00:00');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1); // Increment time by 1 minute
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
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    );
  }, [time]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-6xl font-bold`}>{formattedTime}</Text>
    </View>
  );
};

export default TimerApp;
