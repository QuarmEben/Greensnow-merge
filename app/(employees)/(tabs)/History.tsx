import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator, FlatList, SafeAreaView, LogBox } from "react-native";

import tw from "twrnc"
import  UserHeader  from "../components/UserHeader";
import  JobCard  from "../components/JobCard";
import { images } from "@/assets/images";
import { router } from "expo-router";
import { ShiftDetailsData, TakenShiftsjobCardData, postedShiftsJobCardData } from "@/assets/data/Data";
import { JobCardProps, ShiftDetailsProps } from "./types";

const History: React.FC = () => {

  const [data, setData] = useState<ShiftDetailsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    setTimeout(() => {
      setData(ShiftDetailsData); // Using imported JSON data
      setLoading(false);
    }, 1000);
  }, []);
  
  return (
    
    <View style={tw`flex-1 flex-col overflow-hidden flex-col items-center w-full bg-zinc-100`}>
       
      <View style={tw`flex flex-row gap-5 justify-between w-full text-center max-w-[362px] text-stone-900`}>
        <View style={tw`flex flex-col items-start`}>
         
          <View style={tw`self-stretch mt-4 text-xl font-extrabold tracking-tight leading-none`}>
            <Text style={tw`text-xl font-extrabold tracking-tight leading-none`}>Previous shifts</Text>
          </View>
        </View>
      </View>

      {/* Shift card goes here */}
    <View style={tw`flex  h-[90%] mt-5 mb-20 w-full`}>
              <ScrollView contentContainerStyle={tw``}>

              <SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>

{loading ? (
<ActivityIndicator size="large" color="blue" />
) : (
<FlatList style={tw`w-full`}
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => router.push({
      pathname: "/shifts/CompletedShiftDetails",
      params: {
        id: item.id
      }
    })}>
      <JobCard 
jobId = {item.id}
date = {item.date}
time = {item.time}
location = {item.location}
position = {item.shiftType}
employee= {item.employee}
hourlyRate = {+item.hourlyRate}
hours = {+item.numberOfHours}
totalAmount = {+item.totalEarnings}
backgroundImage = {item.backgroundImage}
/>
    </TouchableOpacity>
  )}
/>
)}


</SafeAreaView>


</ScrollView>
    </View>
      
      {/* navigation goes here */}
    </View>
 
  );
};

export default History;
