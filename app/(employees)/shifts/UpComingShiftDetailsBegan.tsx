import { useEffect, useState } from 'react';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, LogBox, FlatList, Pressable } from 'react-native';

import tw from "twrnc";
import { DateTimeDisplay } from './components/DateTimeDisplay';
import ShiftDetailsJobCard from './components/ShiftDetailsJobCard';
import { MetricDisplay } from './components/MetricsDisplay';
import { TotalEarnings } from './components/TotalEarning';
import { LocationDisplay } from './components/LocationDisplay';
import { Details } from './components/ShiftDetailsDescription';
import { CountdownTimer } from './components/CountdownTimer';
import { ActionButton } from './components/ActionButton';
import { images } from '@/assets/images';
import { router, useLocalSearchParams } from 'expo-router';
import TimerApp from './components/Timer';
import { ShiftDetailsProps } from './types';
import { ShiftDetailsData } from '@/assets/data/Data';

const UpComingShiftDetailsBegan: React.FC = () => {

  const [isShiftDurationUpModal, setIsShiftDurationUpModal] = useState(false);
  const [isShiftCompletedModal, setIsShiftCompletedModal] = useState(false);
  const [isShiftCompletionVerifiedModal, setisShiftCompletionVerifiedModal] = useState(false);
  const [time, setTime] = useState<number>(60); // Time in minutes
    const [formattedTime, setFormattedTime] = useState<string>('00:00');
    const [isRunning, setIsRunning] = useState(true);

// For Data loading and Filtering
const { id } = useLocalSearchParams<{id: string}>();

  const [data, setData] = useState<ShiftDetailsProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [seconds, setSeconds] = useState(10);
      //const [isRunning, setIsRunning] = useState(true);
    
    
  
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

      setData(ShiftDetailsData); // Using imported JSON data
        setLoading(false);
        
        // Show the view after 2 seconds
    const timer = setTimeout(() => {
      // setIsRunning(false);
    }, 10000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);

    }, []);
  
  //filter shift by shift ID
    const filteredData = data.filter((shift) => shift.id === id);

    console.log(seconds);
    console.log(isRunning);



// For Timer Execution-----------------------------------------------------------------------
    useEffect(() => {
        
        const intervalId = setInterval(() => {
          setTime(prevTime => {
             //stop timer when it hits 0
            if (prevTime <= 1) {
              clearInterval(intervalId);
              setIsRunning(false)
              return 0;
            }
            return prevTime - 1;
          });// decrease time by 1 minute
        }, 1000); // Update every minute (60000ms = 1 minute)
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);
    
      useEffect(() => {
        // Convert total minutes into hours and minutes
        const hours = Math.floor(time / 60); // Get the full hours
        const minutes = time % 60; // Get the remaining minutes
    
        // Format time as HH:MM
        setFormattedTime(
          `${String(hours).padStart(2, '0')} hours ${String(minutes).padStart(2, '0')} minutes`
        );
      }, [time]);



  return (
    <View style={tw`flex-1 overflow-hidden flex-col p-1 mx-auto w-full bg-zinc-100 max-w-[480px]`}>
      
      <View style={tw`flex gap-10 self-center w-full`}>

      
        <View style={tw`flex flex-col items-start`}>
         
          <View style={tw`self-stretch mt-2.5`}>
            <Text style={tw`self-stretch mt-2.5 text-2xl font-bold text-start text-stone-900`}>Shift Details</Text>
          </View>
          
        </View>

      </View>

      <ScrollView>


      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

<View style={tw`flex`}>


      <DateTimeDisplay 
      date= {item.date}
      time= {item.time}
      />
      
    

      <View style={tw`shrink-0 self-center mt-1.5 max-w-full h-px border border-solid border-stone-300 w-[350px]`} />

      <ShiftDetailsJobCard 
        backgroundImage={item.backgroundImage}
        jobTitle={item.shiftType}
        companyName={item.employer}
        />


<MetricDisplay 
        leftValue={"$" + item.hourlyRate}
        leftLabel="Hourly rate"
        rightValue={item.hourlyRate + " HRS"}
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


{/* View employee profile */}
        <View style={tw`mt-2 mb-8`}>
        <View style={tw`flex flex-col items-start mt-3 tracking-tight mt-4 rounded-none max-w-[359px]`}>
     
     <Text style={tw`font-semibold leading-6 text-neutral-400 text-base tracking-tight`}>Shift Picked By</Text>
     
     <View style={tw`flex flex-row justify-between gap-5 w-full mt-1`}>
     <Text style={tw`text-zinc-600 tracking-tight text-sm text-neutral-500`}>{item.employee}</Text>
     <Pressable onPress={() => router.push({
       pathname: "/shifts/ShiftPickerProfile",
       params: {
         id: item.employeeId
       }
     })} 
     ><Text style={tw`text-zinc-600 tracking-tight text-sm text-green-700 underline`}>View Profile</Text></Pressable>
     </View>
  
 </View>        
 </View>

{/* Timer----------------------- */}
<View style={tw`mt-8 text-lg font-bold tracking-tight text-center`}>
<View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg font-bold tracking-tight text-center`}>{formattedTime}</Text>
    </View>
  </View>

      <View style={tw`self-center w-[271px]`}>
    <Text style={tw`self-center text-sm tracking-tight text-center text-zinc-600 w-[271px]`}>for shift to end.</Text>
  </View>

        

        {/* <View style={tw`self-center px-16 py-4 mt-9 w-full rounded-xl bg-stone-300 max-w-[327px]`}>
          <Text style={tw`text-xl text-center font-semibold tracking-tight bg-stone-300 text-zinc-500`}>Complete Shift</Text>
        </View> */}

{/* Action Button For main body    */}
{ isRunning ? 
  <View 
      style={tw`self-center px-16 py-4 mt-10 w-[300px] text-xl font-semibold tracking-tight rounded-xl bg-stone-300 max-w-[327px]`}
      
      >
        <Text style={tw`text-zinc-500 self-center text-xl font-semibold tracking-tight`}>Complete Shift</Text>
      </View>:
<View style={tw`self-center`}>
        <ActionButton 
        label='Complete Shift'
        onPress={() => setIsShiftDurationUpModal(true)}
        isEnabled={true}
        className=''
        />
        </View>
}
      </View>


        )}
      />


      </ScrollView>


{/* Shift duration up modal */}
      <Modal 
        visible={isShiftDurationUpModal} 
        onRequestClose={() => setIsShiftDurationUpModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-auto mb-auto`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-[322px] bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setIsShiftDurationUpModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Shift Duration Is Up</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}><Text style={tw`text-stone-900 font-bold`}> 0 hours 00 minutes </Text> for shift to end.</Text>
            </View>
            
            <View style={tw`self-start mt-7 mb-15`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              Once you click 'complete', we will{'\n'}confirm{'\n'}and the shift will be marked as complete.
              </Text>
            </View>
            
            
            
            <View style={tw`self-center`}>
            <ActionButton 
              label="Complete"
              isEnabled={true}
              onPress={() => {
                setIsShiftDurationUpModal(false);
                setIsShiftCompletedModal(true);
              }
              }
              className='py-2.5 mt-7 max-w-full rounded-md w-[193px] px-1'
            />
            </View>
          </View>
      </View>
    </Modal>

    
    

    {/* Shift Completed modal -----------------------------------------------*/}
    <Modal 
        visible={isShiftCompletedModal} 
        onRequestClose={() => setIsShiftCompletedModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-auto mb-auto`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-[322px] bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setIsShiftCompletedModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Shift Completed</Text>
            </View>
            
            <View style={tw`self-start mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              You have verified that the shift has been completed
              </Text>
            </View>
            
            
            <View style={tw`self-center mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
                Good job!
              </Text>
            </View>

<View style={tw`self-center`}>
            <ActionButton 
              label="Rate Shift"
              isEnabled={true}
              onPress={() => {
                setisShiftCompletionVerifiedModal(false);
                router.push("/shifts/RateCompletedShift")
              }
              
              }
              className='py-2.5 mt-30 rounded-md w-[193px] px-1'
            />
            </View>
            
          </View>
      </View>
    </Modal>



    </View>
  );
};

export default UpComingShiftDetailsBegan;