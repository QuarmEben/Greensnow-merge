import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LocationDisplay } from "./components/LocationDisplay";
import { MetricDisplay } from "./components/MetricsDisplay";
import tw from 'twrnc';
import { DateTimeDisplay } from "./components/DateTimeDisplay";
import { ShiftsHeader } from "./components/ShiftsHeader";
import ShiftDetailsJobCard from "./components/ShiftDetailsJobCard";
import { TotalEarnings } from "./components/TotalEarning";
import { Details } from "./components/ShiftDetailsDescription";
import { EmployeeDetailsDisplay } from "./components/EmployeeDetailsDisplay";
import { images } from "@/assets/images";

export function CompletedShiftDetails() {

    const gainedBadges = [
        { iconUri: require("../../assets/images/star.png"), text: "+40 Rating" },
        { iconUri: require("../../assets/images/rating.png"), text: "+35 Rank" }
      ];

  return (
    
    <View style = {tw`flex-1 overflow-hidden flex-col items-start px-3.5 py-10 mx-auto w-full bg-zinc-100 max-w-[480px]`} className="flex overflow-hidden flex-col items-start px-3.5 py-4 mx-auto w-full bg-zinc-100 max-w-[480px]">
      
      <ShiftsHeader />

      <View style = {tw`text-2xl font-bold text-center text-stone-900`} className="text-2xl font-bold text-center text-stone-900">
        <Text style = {tw`text-2xl font-bold text-center text-stone-900`}>Completed Shift Details</Text>
      </View>
      <ScrollView>
      <View style = {tw`flex flex-col items-center self-stretch mt-2.5`} className="flex flex-col items-center self-stretch mt-2.5">
        
      <DateTimeDisplay 
      date='Tue, 10th Dec'
      time='12:00 AM'
      />

        <ShiftDetailsJobCard 
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e22974a8cab7de7ade9ef3581d4d7d8c9af88c24f37539b7a88183f9fa7ea5?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        jobTitle="General Labor"
        companyName="Transgate Construction"
        />

        <MetricDisplay 
        leftValue="$17.50"
        leftLabel="Hourly rate"
        rightValue="8 HRS"
        rightLabel="Duration"
        />
        

        <TotalEarnings  totalEarnings={140}/>

        <LocationDisplay
          address="1180 Barlow Trail NE, Calgary, AB T3J, Canada"
          mapImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bd168c1c64b133f2d4d9e3c84c1312dffacfbdccf2b8317ffcd8ad231338fdbc?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />

        <MetricDisplay
          leftValue="12:00AM"
          leftLabel="start Time"
          rightValue="8:00AM"
          rightLabel="End Time"
        />


        <Details description="Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes."/>
<View style={tw`flex self-start w-full`}>
        <EmployeeDetailsDisplay name='Evanela Aba Forson'/>
        </View>

        <View style={tw`z-10 self-center text-xs font-semibold tracking-tight leading-6 text-neutral-400`}>
          <Text style={tw`z-10 self-center mt-6 text-xs font-semibold leading-6 text-neutral-400`}>Your Rating</Text>
        </View>

        <View style={tw`flex flex-row gap-2.5 items-center justify-center self-center max-w-full w-[193px]`}>
          
    <Image
      source={ images.greenstar }
      style={tw`object-contain shrink-0 self-center my-auto w-[31.67px] aspect-square`}
    />
    
      <Text style={tw`my-auto text-xs tracking-tight text-center text-zinc-600`}>+40 Rating</Text>
   </View>

        
        
      </View>
      </ScrollView>
    </View>
    
  );
}