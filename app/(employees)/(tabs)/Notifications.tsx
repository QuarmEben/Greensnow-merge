import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import tw from "twrnc";
import UserHeader from "../components/UserHeader";
import { images } from "@/assets/images";
import NotificationsAvailable from "../notifications/NotificationsAvailable";
import { NoNotifications } from "../notifications/NoNotifications";



const Notifications: React.FC = () => {
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(true);
  const [view, setView] = useState("empty");
  
  useEffect(() => {
    if (seconds > 4) {
      setView("empty");
    } else {
      setView("available");
    }
    

    let timer2: NodeJS.Timeout;
    if (isRunning && seconds > 0) {
      timer2 = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer2);
  }, [isRunning, seconds]);


  switch (view) {
    case "empty":
      return <NoNotifications />;
    case 'available':
      return <NotificationsAvailable />;
    default:
      return <View />;
  }
  
};

export default Notifications;
