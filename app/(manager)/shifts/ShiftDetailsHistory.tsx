import { useEffect, useState } from 'react';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Modal, ScrollView, Pressable, LogBox, FlatList } from 'react-native';

import tw from "twrnc";
import { DateTimeDisplay } from '../components/DateTimeDisplay';
import ShiftDetailsJobCard from '../components/ShiftDetailsJobCard';
import { MetricDisplay } from '../components/MetricsDisplay';
import { TotalEarnings } from '../components/TotalEarning';
import { LocationDisplay } from '../components/LocationDisplay';
import { Details } from '../components/ShiftDetailsDescription'; 
import { ButtonProps, RatingIndicatorProps, ReviewDataProps } from './types';
import { ActionButton } from '../components/ActionButton';
import { images } from '@/assets/images';
import { EmployerDetailsDisplay } from '../components/EmployerDetailsDisplay';
import { router, useLocalSearchParams } from 'expo-router';
import { EmployeeDetailsDisplay } from '../components/EmployeeDetailsDisplay';
import { ReviewData } from '@/assets/data/Data';

const ShiftDetailsTaken: React.FC = () => {

  const [isCancelShiftModal, setisCancelShiftModal] = useState(false);
  const [data, setData] = useState<ReviewDataProps[]>([]);
  const [filteredData, setFilteredData] = useState<ReviewDataProps[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    setTimeout(() => {
      setData(ReviewData); // Using imported JSON data
      setLoading(false);
    }, 1000);
  }, []);

 
  
  const ratingData = [
    { icon: images.starred, value: "-10" },
    { icon: images.ratingred, value: "-35" }
  ];

  const reviewData = [
    { name: 'Arrival On Time', value: "Yes" },
    { name: 'Worker Conduct',value: "Calm and Respectful" },
    { name: 'Willing To Work With Again',value: "Yes" },
    { name: 'Additional Info',value: "Very friendly" },
  ];



  type ShiftDetailsProps = {
    id: string,
    shiftType: string;
    totalEarnings: string;
    date: string;
    time: string;
    endTime: string;
    hourlyRate: string;
    numberOfHours: string;
    numberOfOpenings: string;
    location: string;
    description: string;
    employee: string;
    employer: string;
    employerId: string;
    employeeId: string;
  }

  const { id, shiftType, date, time, endTime, hourlyRate, totalEarnings, location, description, employeeId, employerId, employee, employer  } = useLocalSearchParams<ShiftDetailsProps>();

 // Filter Review Data  based on shift
 const filteredResults = data.filter(review =>
  review.id === id
);

  return (
    <View style={tw`flex-1 overflow-hidden items-center justify-center flex-col p-1 mx-auto w-full bg-zinc-100 max-w-[480px]`}>
      
      <View style={tw`flex flex-row gap-10 self-center text-stone-900`}>

      
        <View style={tw`flex flex-col w-full items-start`}>
         
          <View style={tw`self-stretch text-2xl font-bold`}>
            <Text style={tw`self-stretch mt-2.5 text-2xl font-bold text-start text-stone-900`}>Shift Details</Text>
          </View>
          
        </View>

      </View>

      <ScrollView>


      <DateTimeDisplay 
      date= {date}
      time={time}
      />
      
    

      <View style={tw`shrink-0 self-center mt-1.5 max-w-full h-px border border-solid border-stone-300 w-[350px]`} />

      <ShiftDetailsJobCard 
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e22974a8cab7de7ade9ef3581d4d7d8c9af88c24f37539b7a88183f9fa7ea5?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        jobTitle={shiftType}
        companyName={employer}
        />


<MetricDisplay 
        leftValue={"$" + hourlyRate}
        leftLabel="Hourly rate"
        rightValue={hourlyRate + " HRS"}
        rightLabel="Duration"
        />
        

        <TotalEarnings  totalEarnings={+totalEarnings}/>

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

        <View style={tw`mt-2`}>
          <Details description={description} />
        </View>

        {/* Link to employer profile */}
        <View style={tw`mt-2`}>
        <View style={tw`flex flex-col items-start mt-3 tracking-tight mt-4 rounded-none max-w-[359px]`}>
     
     <Text style={tw`font-semibold leading-6 text-neutral-400 text-sm tracking-tight`}>Posted By</Text>
     
     <View style={tw`flex flex-row justify-between gap-5 w-full mt-1`}>
     <Text style={tw`text-zinc-600 tracking-tight text-sm text-neutral-500`}>{employer}</Text>
     <Pressable onPress={() => router.push({
       pathname: "/screens/ProfileDetailsEmployer",
       params: {
         id: employerId
       }
     })} 
     ><Text style={tw`text-zinc-600 tracking-tight text-sm text-green-700 underline`}>View Profile</Text></Pressable>
     </View>
  
 </View>
        </View>

        <FlatList
        data={filteredResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tw`flex flex-col gap-1 mt-4`}>
          {/* Employer rating */}
        <View style={tw`flex flex-col gap-1 mt-4`}>
        <Text style={tw`font-semibold leading-6 text-neutral-400 text-sm tracking-tight`}>Employer Rating</Text>
    <View style={tw`flex flex-row gap-2`}>
        <Image
      source={ images.greenstar }
      style={tw`object-contain shrink-0 self-center my-auto w-[20.83px] aspect-square`}
    />
    
      <Text style={tw`my-auto text-base tracking-tight text-center text-zinc-600`}>{item.employerRating} Rating</Text>
   </View>
   </View>

   {/* Link to employee profile  */}

        <View style={tw`mt-2 mb-8`}>
        <View style={tw`flex flex-col items-start mt-3 tracking-tight mt-4 rounded-none max-w-[359px]`}>
     
     <Text style={tw`font-semibold leading-6 text-neutral-400 text-base tracking-tight`}>Shift Picked By</Text>
     
     <View style={tw`flex flex-row justify-between gap-5 w-full mt-1`}>
     <Text style={tw`text-zinc-600 tracking-tight text-sm text-neutral-500`}>{employee}</Text>
     <Pressable onPress={() => router.push({
       pathname: "/screens/ProfileDetailsEmployee",
       params: {
         id: employeeId
       }
     })} 
     ><Text style={tw`text-zinc-600 tracking-tight text-sm text-green-700 underline`}>View Profile</Text></Pressable>
     </View>
  
 </View>        
 </View>

        

        {/* Jobseeker Rating Earned */}
        <View style={tw`flex flex-col gap-1`}>
        <Text style={tw`font-semibold leading-6 text-neutral-400 text-base tracking-tight`}>Job Seeker Rating Earned</Text>
        <View style={tw`flex flex-col gap-1`}>
    <View style={tw`flex flex-row gap-2`}>
        <Image
      source={ images.greenstar }
      style={tw`object-contain shrink-0 self-center my-auto w-[20.83px] aspect-square`}
    />
    
      <Text style={tw`my-auto text-base tracking-tight text-center text-zinc-600`}>{item.employeeRatingEarned} Rating</Text>
        
   </View>
    <View style={tw`flex flex-row gap-2`}>
        
        <Image
      source={ images.greenapproval }
      style={tw`object-contain shrink-0 self-center my-auto w-[20.83px] aspect-square`}
    />
    
      <Text style={tw`my-auto text-base tracking-tight text-center text-zinc-600`}>{item.employeeAssuranceEarned} Assurance</Text>
      </View>
   </View>
   </View>

   {/* Job Seeker Performance Review */}
        <View style={tw`flex flex-col gap-1 mt-4`}>
        <Text style={tw`font-semibold leading-6 text-neutral-400 text-base tracking-tight`}>Job Seeker Performance Review</Text>
        <View style={tw`flex flex-col`}>
  
        <Text style={tw`my-auto text-base tracking-tight text-zinc-600 mt-0.5`}>Arrival On Time - <Text style={tw`font-bold text-stone-900`}>{item.ArrivalOnTime}</Text></Text>

         
            
        <Text style={tw`my-auto text-base tracking-tight text-zinc-600 mt-0.5`}>Worker Conduct - <Text style={tw`font-bold text-stone-900`}>{item.WorkerConduct}</Text></Text>
    
          
            
        <Text style={tw`my-auto text-base tracking-tight text-zinc-600 mt-0.5`}>Willing To Work With Again - <Text style={tw`font-bold text-stone-900`}>{item.WillingToWorkWithAgain}</Text></Text>
      
        <Text style={tw`my-auto text-base tracking-tight text-zinc-600 mt-0.5`}>Additional Info - <Text style={tw`font-bold text-stone-900`}>{item.AdditionalInfo}</Text></Text>

    
   </View>

    
   </View>
   </View>
        )}
      />
        

      
      </ScrollView>

      {/* Cancel Shift Modal */}
      <Modal 
        visible={isCancelShiftModal} 
        onRequestClose={() => setisCancelShiftModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-30 `}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-[322px] bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setisCancelShiftModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Are you sure you{'\n'}want to cancel?</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}><Text style={tw`font-semibold text-stone-900`}>5 hours 13 minutes</Text> for shift to start.</Text>
            </View>
            
            <View style={tw`self-start mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
                Your assurance and ratings would drop if you cancel now. 
          
              </Text>
            </View>
            
        
            <View style={tw`self-center`}>
            <ActionButton 
              label="Cancel"
              onPress={() => {
                setisCancelShiftModal(false);
                router.push("/");
              }}
              isEnabled={true}
              className='px-16 py-2.5 mt-5 max-w-full text-xl font-semibold tracking-tight text-white whitespace-nowrap bg-rose-600 rounded-md w-[193px]'
            />
            </View>
          </View>
      </View>
    </Modal>


    </View>
  );
};




export default ShiftDetailsTaken;

