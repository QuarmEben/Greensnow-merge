import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView } from "react-native";

import tw from "twrnc";
import  UserHeader  from "./components/UserHeader";
import  JobCard  from "./components/JobCard";
import { images } from "@/assets/images";
import { ActionButton } from "./components/ActionButton";
import { router } from "expo-router";
import { JobCardProps } from "./types";
import { postedShiftsJobCardData } from "@/assets/data/Data";



const ShiftsWithPosts: React.FC = () => {

  const [data, setData] = useState<JobCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(postedShiftsJobCardData); // Using imported JSON data
      setLoading(false);
    }, 1000);
  }, []);


  return (
    
    <View style={tw`flex-1 flex-col overflow-hidden flex-col items-center px-1 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <UserHeader 
      avatarUrl={images.avatarverified}
      username="Angela"
      />

        <View>
            
        </View>

      <View style={tw`flex-1 flex-col gap-4 justify-center w-full mt-4 max-w-[480px]`}>
        
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

        {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.jobId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <JobCard 
        jobId = {item.jobId}
        date = {item.date}
        time = {item.time}
        location = {item.location}
        position = {item.position}
        hourlyRate = {item.hourlyRate}
        hours = {item.hours}
        totalAmount = {item.totalAmount}
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

