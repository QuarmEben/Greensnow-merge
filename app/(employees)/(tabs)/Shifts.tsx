import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, LogBox } from "react-native";

import tw from "twrnc";
import  UserHeader  from "../components/UserHeader";
import  JobCard  from "../components/JobCard";
import { images } from "@/assets/images";
import { ActionButton } from "../components/ActionButton";
import { router } from "expo-router";
import { JobCardProps, ShiftDetailsProps } from "./types";
import { ShiftDetailsData, postedShiftsJobCardData } from "@/assets/data/Data";



const ShiftsWithPosts: React.FC = () => {

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
    
    <View style={tw`flex-1 flex-col overflow-hidden flex-col items-center px-1 pt-5 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>


      <View style={tw`flex-1 flex-col gap-4 justify-center w-full  max-w-[480px]`}>
        
        {/* Action Button */}
        <ActionButton 
          className="self-start w-[193px] px-2 py-2 mt-3"
          isEnabled = {true}
          label="Create Shift"
          onPress={()=> router.push("/shifts/CreateShift")}
        />
        
        <Text style={tw`text-lg font-bold`}>Posted Shifts</Text>
        
        <ScrollView>
  
        <SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
{/* Flatlist---------------------------------------------------------------------------------- */}
        {loading  ? (
        <ActivityIndicator style={tw`mt-[50%]`} size="large" color="blue" />
      ) : (
        <FlatList style={tw`w-full`}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push({
              pathname: "/shifts/ShiftDetailsPosted",
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
      
    </View>
  );
};

export default ShiftsWithPosts;

