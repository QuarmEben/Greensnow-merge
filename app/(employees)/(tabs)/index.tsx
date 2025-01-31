import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import UserHeader from "../components/UserHeader";
import { images } from "@/assets/images";
import { Link, router } from "expo-router";
import HomeNotVerified from "../home/HomeNotVerified";
import HomeBeingVerified from "../home/HomeBeingVerified";
import HomeNoPost from "../home/HomeNoPost";
import HomePostedShifts from "../home/HomePostedShifts";

const Home: React.FC = () => {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(true);
  const [view, setView] = useState("notVerified");
  
  useEffect(() => {
    if (seconds > 24) {
      setView("notVerified");
    } else if (seconds < 25 && seconds > 19) {
      setView("beingVerified");
    } else if (seconds < 20 && seconds > 14) {
      setView("verified");
    } else {
      setView("shiftsPosted");
    }

    console.log(seconds);

    let timer: NodeJS.Timeout;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);


  switch (view) {
    case "notVerified":
      return <HomeNotVerified />;
    case 'beingVerified':
      return <HomeBeingVerified />;
    case 'verified':
      return <HomeNoPost />;
    case 'shiftsPosted':
      return <HomePostedShifts />;
    default:
      return <View />;
  }
};
  

export default Home;