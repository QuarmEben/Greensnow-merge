import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator, FlatList, SafeAreaView, ScrollView, LogBox } from 'react-native';
import tw from "twrnc";
import  JobCard  from '../components/JobCard';
import { router } from 'expo-router';
import { ShiftDetailsData } from '@/assets/data/Data';
import { ShiftDetailsProps } from './types';
import { ActionButton } from '../components/ActionButton';


 // Shift Tabs State


const HomePostedShifts: React.FC = () => {

  const [tab, setTab] = useState("posted");
  const [postedShiftsData, setPostedShiftsData] = useState<ShiftDetailsProps[]>([]);
  const [shiftsTakenData, setShiftsTakenData] = useState<ShiftDetailsProps[]>([]);
  const [pendingShiftsData, setPendingShiftsData] = useState<ShiftDetailsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    setTimeout(() => {
      setPostedShiftsData(ShiftDetailsData); // Using imported JSON data
      setShiftsTakenData(ShiftDetailsData); // Using imported JSON data
      setPendingShiftsData(ShiftDetailsData); // Using imported JSON data
      setLoading(false);
    }, 1000);
  }, []);
  

      return (
        <View style={tw`flex-1 flex-col overflow-hidden flex-col px-1 pt-1 pb-6 mx-auto w-full bg-zinc-100 max-w-[480px] items-center text-center`}>
    
          <View style={tw`flex mt-5 mb-18 w-full`}>
                <View style={tw`flex flex-row items-start gap-2.5 w-64 max-w-full rounded-none w-full`}>
                
                        <TouchableOpacity onPress={() => setTab("posted")}>
                        <Text style={tw`grow text-base text-stone-900 font-extrabold tracking-tight leading-loose ${tab=="posted" ? `text-green-700 underline` : ``} `}>Posted Shifts</Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity onPress={() => setTab("taken")}>
                        <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose ${tab=="taken" ? `text-green-700 underline` : ``}`}>Shifts Taken</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity onPress={() => setTab("pending")}>
                        <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose ${tab=="pending" ? `text-green-700 underline` : ``}`}>Pending Shifts</Text>
                        </TouchableOpacity>
                </View>

                {/* Action Button */}
        <ActionButton 
          className="self-start w-[193px] px-2 py-2 mt-3"
          isEnabled = {true}
          label="Create Shift"
          onPress={() => router.push("/screens/CreateShift")}
          //onPress={()=> router.push("/shifts/CreateShift")}
        />

                <ScrollView>

                { tab == "posted" ? 
        <SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
        
        {loading ? (
          <View style={tw`mt-[50%]`}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <SafeAreaView style={tw`w-full`}>
        <FlatList
          data={postedShiftsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => router.push({
              pathname: '/shifts/ShiftDetailsPosted',
              params: {
                shiftType: postedShiftsData[index].shiftType,
                date: postedShiftsData[index].date,
                time: postedShiftsData[index].time,
                endTime: postedShiftsData[index].endTime,
                hourlyRate: postedShiftsData[index].hourlyRate,
                totalEarnings: postedShiftsData[index].totalEarnings,
                numberOfHours: postedShiftsData[index].numberOfHours,
                numberOfOpenings: postedShiftsData[index].numberOfOpenings,
                location: postedShiftsData[index].location,
                description: postedShiftsData[index].description,
                employer: postedShiftsData[index].employer,
                employee: postedShiftsData[index].employee,
                employerId: postedShiftsData[index].employerId,
                employeeId: postedShiftsData[index].employeeId
              } 
            })}>
              <JobCard 
        jobId = {item.id}
        date = {item.date}
        time = {item.time}
        location = {item.location}
        shiftType = {item.shiftType}
        employer = {item.employer}
        hourlyRate = {item.hourlyRate}
        hours = {item.time}
        totalAmount = {item.totalEarnings}
        backgroundImage = {item.backgroundImage}
        />
            </TouchableOpacity>
          )}
        />
        </SafeAreaView>
      )}
        
        
        </SafeAreaView>
 : tab == "taken" ? 


<SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
        
{loading ? (
<ActivityIndicator size="large" color="blue" />
) : (
<SafeAreaView style={tw`w-full`}>
<FlatList
  data={shiftsTakenData}
  keyExtractor={(item) => item.id}
  renderItem={({ item , index }) => (
    <TouchableOpacity onPress={() => router.push({
      pathname: '/shifts/ShiftDetailsTaken',
      params: {
        shiftType: postedShiftsData[index].shiftType,
        date: postedShiftsData[index].date,
        time: postedShiftsData[index].time,
        endTime: postedShiftsData[index].endTime,
        hourlyRate: postedShiftsData[index].hourlyRate,
        totalEarnings: postedShiftsData[index].totalEarnings,
        numberOfHours: postedShiftsData[index].numberOfHours,
        numberOfOpenings: postedShiftsData[index].numberOfOpenings,
        location: postedShiftsData[index].location,
        description: postedShiftsData[index].description,
        employer: postedShiftsData[index].employer,
        employee: postedShiftsData[index].employee,
        employerId: postedShiftsData[index].employerId,
        employeeId: postedShiftsData[index].employeeId
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
</SafeAreaView>
)}


</SafeAreaView> : 

// Pending Shifts Display ------------------------------------------------------------

<SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
        
{loading ? (
<ActivityIndicator size="large" color="blue" />
) : (
<SafeAreaView style={tw`w-full`}>
<FlatList
  data={pendingShiftsData}
  keyExtractor={(item) => item.id}
  renderItem={({ item, index }) => (
    <TouchableOpacity onPress={() => router.push({
      pathname: '/shifts/ShiftDetailsPending',
      params: {
        shiftType: postedShiftsData[index].shiftType,
        date: postedShiftsData[index].date,
        time: postedShiftsData[index].time,
        endTime: postedShiftsData[index].endTime,
        hourlyRate: postedShiftsData[index].hourlyRate,
        totalEarnings: postedShiftsData[index].totalEarnings,
        numberOfHours: postedShiftsData[index].numberOfHours,
        numberOfOpenings: postedShiftsData[index].numberOfOpenings,
        location: postedShiftsData[index].location,
        description: postedShiftsData[index].description,
        employer: postedShiftsData[index].employer,
        employee: postedShiftsData[index].employee,
        employerId: postedShiftsData[index].employerId,
        employeeId: postedShiftsData[index].employeeId
      } 
    })}>
      <JobCard 
jobId = {item.id}
date = {item.date}
time = {item.time}
location = {item.location}
shiftType = {item.shiftType}
employer = {item.employer}
hourlyRate = {item.hourlyRate}
hours = {item.time}
totalAmount = {item.totalEarnings}
backgroundImage = {item.backgroundImage}
/>
    </TouchableOpacity>
  )}
/>
</SafeAreaView>
)}


</SafeAreaView>

}

        
        </ScrollView>

                
            
                  </View>
    
       
          
        </View>
      );
  
  
};


export default HomePostedShifts;