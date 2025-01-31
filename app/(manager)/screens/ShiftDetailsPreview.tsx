import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { LocationDisplay } from "./components/LocationDisplay";
import { MetricDisplay } from "./components/MetricsDisplay";
import tw from 'twrnc';
import { DateTimeDisplay } from "./components/DateTimeDisplay";
import  ShiftDetailsJobCard  from "./components/ShiftDetailsJobCard";
import { TotalEarnings } from "./components/TotalEarning";
import { Details } from "./components/ShiftDetailsDescription";
import { RequiredItems } from "./components/ItemsCheckList";
import { ActionButton } from "./components/ActionButton";
import { images } from "@/assets/images";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";

const ShiftDetailsPreview: React.FC = () => {

  const [isSubmitShiftModal, setisSubmitShiftModal] = useState(false);
  const { shiftType, date, time, endTime, hourlyRate, numberOfHours, numberOfOpenings, location, description } = useLocalSearchParams<{shiftType: string, hourlyRate: string, date: string, time: string, endTime: string, numberOfHours: string, numberOfOpenings:string, location: string, description: string}>();

  console.log(endTime);

  // calculate total earnings
  const totalEarnings = +hourlyRate * +numberOfHours;


  return (
    <View style = {tw`flex-1 overflow-hidden flex-col p-1 items-start w-full bg-zinc-100 max-w-[480px]`} className="flex overflow-hidden flex-col items-start px-3.5 py-4 mx-auto w-full bg-zinc-100 max-w-[480px]">


      
        <Text style = {tw`text-2xl font-bold text-center text-stone-900`}>Shift Details</Text>
      
      <ScrollView>
      <View style = {tw`flex flex-col items-center self-stretch mt-2.5`} className="flex flex-col items-center self-stretch mt-2.5">
        
      <DateTimeDisplay 
      date= {date}
      time={time}
      />

        <ShiftDetailsJobCard 
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e22974a8cab7de7ade9ef3581d4d7d8c9af88c24f37539b7a88183f9fa7ea5?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        jobTitle={shiftType}
        companyName="Transgate Construction"
        />

        <MetricDisplay 
        leftValue={"$" + hourlyRate}
        leftLabel="Hourly rate"
        rightValue={numberOfHours + " HRS"}
        rightLabel="Duration"
        />
        

        <TotalEarnings  totalEarnings={totalEarnings.toString()}/>

         <LocationDisplay
          address={location}
          mapImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bd168c1c64b133f2d4d9e3c84c1312dffacfbdccf2b8317ffcd8ad231338fdbc?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        /> 


        <MetricDisplay
          leftValue={time}
          leftLabel="start time"
          rightValue={endTime}
          rightLabel="End Time"
        />


        <Details description={description} />

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
            className="py-3 px-1"
            isEnabled = {true}
            label="Submit For Review"
            onPress={()=> setisSubmitShiftModal(true)}
             
        />
        </View>
      </View>
      </ScrollView>


{/* Begin shift modal */}
<Modal 
        visible={isSubmitShiftModal} 
        onRequestClose={() => setisSubmitShiftModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex self-center rounded-none max-w-[322px] mt-auto mb-auto overflow-hidden`}>
          <View style={tw`flex flex-col items-center px-8 py-8 w-[322px] bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setisSubmitShiftModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}>
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-8`}>
              <Text style={tw`text-xl text-center font-extrabold tracking-tight leading-6 text-zinc-800`}>Your Shift Will Be Reviewed{"\n"}And Posted Once It Has{"\n"}Been Approved</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center mb-3`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}>Proceed to submission?</Text>
            </View>
            
            
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              You will be notified once your shift has been approved.
              </Text>
        
            
            <View style={tw`self-center`}>
            <ActionButton 
              label="Begin"
              onPress={() => { 
                setisSubmitShiftModal(false);
                router.push("/screens/ShiftsCompleted")
              }}
              isEnabled={true}
              className='px-16 py-2.5 mt-7 max-w-full rounded-md w-[193px]'
            />
            </View>
          </View>
      </View>
    </Modal>


    </View>
  );
}

export default ShiftDetailsPreview;
