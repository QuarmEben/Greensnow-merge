import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LocationDisplay } from "./components/LocationDisplay";
import { MetricDisplay } from "./components/MetricsDisplay";
import tw from 'twrnc';
import { DateTimeDisplay } from "./components/DateTimeDisplay";
import { ShiftsHeader } from "./components/ShiftsHeader";
import  ShiftDetailsJobCard  from "./components/ShiftDetailsJobCard";
import { TotalEarnings } from "./components/TotalEarning";
import { Details } from "./components/ShiftDetailsDescription";
import { RequiredItems } from "./components/ItemsCheckList";
import { ActionButton } from "./components/ActionButton";
import { images } from "@/assets/images";

export function ShiftDetailsPreview() {
  return (
    <View style = {tw`flex-1 overflow-hidden flex-col items-start px-3.5 py-10 mx-auto w-full bg-zinc-100 max-w-[480px]`} className="flex overflow-hidden flex-col items-start px-3.5 py-4 mx-auto w-full bg-zinc-100 max-w-[480px]">
      
      <ShiftsHeader />

      <View style = {tw`text-2xl font-bold text-center text-stone-900`} className="text-2xl font-bold text-center text-stone-900">
        <Text style = {tw`text-2xl font-bold text-center text-stone-900`}>Shift Details</Text>
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

        {/* Map View */}
        {/* <View style={tw`flex bg-black w-`}> 
        <Map />
        </View> */}

        <MetricDisplay
          leftValue="12:00AM"
          leftLabel="start time"
          rightValue="8:00AM"
          rightLabel="End Time"
        />


        <Details description="Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes."/>

       <Text style = {tw`self-stretch mt-3 w-full text-xs font-semibold tracking-tight leading-6 text-neutral-400`}>Required</Text>

       <View style = {tw`self-stretch w-full`}>
       
        <RequiredItems
          requiredItems={[
            { imageUrl: images.shoe, title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: false},
  { imageUrl: images.shoe, title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: false},
  { imageUrl: images.shoe, title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: false}
          ]}
        />

<Text style = {tw`self-stretch mt-3 w-full text-xs font-semibold tracking-tight leading-6 text-neutral-400`}>Not Allowed</Text>


<RequiredItems
          requiredItems={[
            { imageUrl: images.shoe, title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: false},
  { imageUrl: images.shoe, title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: false},
  { imageUrl: images.shoe, title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: false}
          ]}
        />
      
        </View>
<View style={tw`self-center`}>
        <ActionButton 
            className="py-3"
            isEnabled = {true}
            label="Submit For Review"
            onPress={()=>{}}
             
        />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
