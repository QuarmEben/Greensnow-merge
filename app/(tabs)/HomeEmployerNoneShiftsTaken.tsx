import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import tw from "twrnc";
import  UserHeader  from './components/UserHeader';
import  JobCard  from './components/JobCard';
import { images } from '../../assets/images';



const HomeNoneShiftsTaken: React.FC = () => {
  return (
    <View style={tw`flex-1 flex-col overflow-hidden flex-col px-4 pt-10 pb-6 mx-auto w-full bg-zinc-100 max-w-[480px] items-center text-center`}>
     <UserHeader 
      avatarUrl={images.avatarverified}
      username="Jacob Construction"
      />

      <View style={tw`flex mt-5 w-full`}>
            <View style={tw`flex flex-row items-start gap-2.5 w-64 max-w-full rounded-none w-full`}>
            
                    <TouchableOpacity>
                    <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose`}>Posted Shifts</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity>
                    <Text style={tw`grow text-green-700 text-base font-extrabold tracking-tight leading-loose underline`}>Shifts Taken</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose`}>Pending Shifts</Text>
                    </TouchableOpacity>
            </View>
        
        <View style={tw`flex flex-col mt-3 w-full`}>
          <TouchableOpacity>
        <JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        position = "General Labor"
        employee='Evanela Aba Forson'
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        </TouchableOpacity>

<JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        position = "General Labor"
        employee='Evanela Aba Forson'
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        </View>
      </View>

   
      
    </View>
  );
};

export default HomeNoneShiftsTaken;