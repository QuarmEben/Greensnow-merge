import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

import tw from "twrnc";
import  UserHeader  from "./components/UserHeader";
import  JobCard  from "./components/JobCard";
import { images } from "@/assets/images";
import { ActionButton } from "./components/ActionButton";



const ShiftsWithPosts: React.FC = () => {
  return (
    <View style={tw`flex-1 flex-col overflow-hidden flex-col items-center px-3 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
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
          onPress={()=>{}}
        />
        
        <Text style={tw`text-lg font-bold`}>Posted Shifts</Text>
        
        <ScrollView>
        <View style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
        
        <JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        position = "General Labor"
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        <JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        position = "General Labor"
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        
        </View>
        
        </ScrollView>
      </View>
      
    </View>
  );
};

export default ShiftsWithPosts;

