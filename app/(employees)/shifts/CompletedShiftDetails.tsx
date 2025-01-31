import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, LogBox, ActivityIndicator, Pressable, FlatList } from "react-native";
import { LocationDisplay } from "../components/LocationDisplay";
import { MetricDisplay } from "../components/MetricsDisplay";
import tw from 'twrnc';
import { DateTimeDisplay } from "./components/DateTimeDisplay";
import  ShiftDetailsJobCard  from "./components/ShiftDetailsJobCard";
import { TotalEarnings } from "./components/TotalEarning";
import { Details } from "../components/ShiftDetailsDescription";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { ShiftDetailsData } from "@/assets/data/Data";
import { router } from "expo-router";
import { ShiftDetailsProps } from "./types";
import { images } from "@/assets/images";


const ShiftDetailsPreview: React.FC = () => {

  const [isSubmitShiftModal, setisSubmitShiftModal] = useState(false);
  const { id } = useLocalSearchParams<{id: string}>();
  const [data, setData] = useState<ShiftDetailsProps[]>([]);
  // const [filteredData, setFilteredData] = useState<ShiftDetailsProps[]>([]);
  const [loading, setLoading] = useState(true);
  //let formattedendTime = '';

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    setTimeout(() => {
      setData(ShiftDetailsData); // Using imported JSON data
      setLoading(false);
    }, 1000);
  }, []);

   // Filter shifts 
   const filteredData = data.filter(shift =>
    shift.id === id
  );
  



  return (
    <View style = {tw`flex-1 overflow-hidden  flex-col p-1 items-center justify-center w-full bg-zinc-100 max-w-[480px]`} className="flex overflow-hidden flex-col items-start px-3.5 py-4 mx-auto w-full bg-zinc-100 max-w-[480px]">

{/* header-------------------------------------------------- */}
<View style = {tw`flex self-start`}>

        <Text style = {tw`text-2xl font-bold text-start text-stone-900`}>Completed Shift Details</Text>
      </View>

  {/* body....................................?. */}
      <ScrollView>

      {loading  ? (
                  
                 

          <ActivityIndicator style={tw`mt-[90%]`} size="large" color="green" />
       
      ) : (
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          
          
          <View style={tw`flex mt-1.5 max-w-full`} >
          
                   <DateTimeDisplay 
          date= {item.date}
          time={item.time}
          />
          
        
    
          <View style={tw`shrink-0 self-center mt-1.5 max-w-full h-px border border-solid border-stone-300 w-[350px]`} />
    
          <ShiftDetailsJobCard 
            backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e22974a8cab7de7ade9ef3581d4d7d8c9af88c24f37539b7a88183f9fa7ea5?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
            jobTitle={item.shiftType}
            companyName={item.employer}
            />
    
    
    <MetricDisplay 
            leftValue={"$" + parseFloat(item.hourlyRate).toFixed(2)}
            leftLabel="Hourly rate"
            rightValue={item.numberOfHours + " HRS"}
            rightLabel="Duration"
            />
            
    
            <TotalEarnings  totalEarnings={+item.totalEarnings}/>
    
            <LocationDisplay
              address={item.location}
              mapImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bd168c1c64b133f2d4d9e3c84c1312dffacfbdccf2b8317ffcd8ad231338fdbc?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
            />
    
            <MetricDisplay
              leftValue={item.time}
              leftLabel="start time"
              rightValue={item.endTime}
              rightLabel="End Time"
            />
    
            <View style={tw`mt-2`}>
              <Details description={item.description} />
            </View>
            <View style={tw`mt-2`}>
            <View style={tw`flex flex-col items-start mt-3 tracking-tight mt-4 rounded-none max-w-[359px]`}>
         
         <Text style={tw`font-semibold leading-6 text-neutral-400 text-base tracking-tight`}>Shift Picked By</Text>
         
         <View style={tw`flex flex-row justify-between gap-5 w-full mt-1`}>
         <Text style={tw`text-zinc-600 tracking-tight text-sm text-neutral-500`}>{item.employee}</Text>
         <Pressable onPress={() => router.push({
           pathname: "/shifts/ShiftPickerProfile",
           params: {
            id: item.employeeId,
           }
         })} 
         ><Text style={tw`text-zinc-600 tracking-tight text-sm text-green-700 underline`}>View Profile</Text></Pressable>
         </View>
      
     </View>
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


        )}
      />
      )}
          
           
        
        

      </ScrollView>

    </View>
  ); 
}

export default ShiftDetailsPreview;
