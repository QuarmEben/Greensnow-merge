import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, LogBox, FlatList } from "react-native";

import tw from "twrnc"
import  UserHeader  from "../components/UserHeader";
import  JobCard  from "../components/JobCard";
import { images } from "@/assets/images";
import { router } from "expo-router";
import { ShiftDetailsData } from "@/assets/data/Data";
import { ShiftDetailsProps } from "./types";

const History: React.FC = () => {
  const [historyData, setHistoryData] = useState<ShiftDetailsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    setTimeout(() => {
      setHistoryData(ShiftDetailsData); // Using imported JSON data
      setLoading(false);
    }, 1000);
  }, []);
  return (
    
    <View style={tw`flex-1 bg-zinc-100`}>
       
      
         
          <View style={tw`mt-8`}>
            <Text style={tw`text-xl font-extrabold tracking-tight leading-none`}>Previous shifts</Text>
          </View>
        

      {/* Shift card goes here */}
    
              <ScrollView contentContainerStyle={tw`flex h-[93%] mt-8`}>

              <FlatList
        data={historyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          


<TouchableOpacity onPress={() => router.push({
      pathname: '/shifts/ShiftDetailsHistory',
      params: {
        id: item.id,
        shiftType: item.shiftType,
        date: item.date,
        time: item.time,
        endTime: item.endTime,
        hourlyRate: item.hourlyRate,
        totalEarnings: item.totalEarnings,
        numberOfHours: item.numberOfHours,
        numberOfOpenings: item.numberOfOpenings,
        location: item.location,
        description: item.description,
        employer: item.employer,
        employee: item.employee,
        employerId: item.employerId,
        employeeId: item.employeeId
      } 
    })}>
      <JobCard 
jobId = {item.id}
date = {item.date}
time = {item.time}
location = {item.location}
shiftType = {item.shiftType}
employee={item.employee}
employer = {item.employer}
hourlyRate = {item.hourlyRate}
hours = {item.time}
totalAmount = {item.totalEarnings}
backgroundImage = {item.backgroundImage}

/>
    </TouchableOpacity>



          
        )}
      />
    

</ScrollView>
  
      
      {/* navigation goes here */}
    </View>
 
  );
};

export default History;
