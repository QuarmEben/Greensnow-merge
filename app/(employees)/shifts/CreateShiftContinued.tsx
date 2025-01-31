import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import { ActionButton } from './components/ActionButton';
import { images } from '@/assets/images';
import { itemListProps } from './types';
import { router } from 'expo-router';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
// import { ShiftSearchParams } from './types';

type CreateShiftScreenProps = {};

type ShiftSearchParams = {
  shiftType: string;
  date: string;
  time: string;
  endTime: string;
  hourlyRate: string;
  numberOfHours: string;
  numberOfOpenings: string;
}

const CreateShiftContinuedScreen: React.FC<CreateShiftScreenProps> = () => {

  const [location, setLocation] = useState<string>('1180 Barlow Trail NE, Calgary, AB T3J, Canada');
  const [description, setDescription] = useState<string>('');
  


  const requiredItems = [
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
  ]

  const notAllowedItems = [
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
    {
      item: 'Worker Boots'
    },
  ]



  const { shiftType, date, time, endTime, hourlyRate, numberOfHours, numberOfOpenings } = useLocalSearchParams<ShiftSearchParams>();

  console.log({shiftType});

  return (
    <View style={tw`flex-1 p-1 bg-gray-100`}>
        <Text style={tw`text-2xl font-bold mb-2`}>Create A New Shift</Text>
      <Text style={tw`text-gray-500 mb-6`}>
        Discover millions of gigs and get in touch with gig hirers as seamless as it comes
      </Text>
    <ScrollView contentContainerStyle={tw`p-2`}>
      

      {/* Location Input */}
      <Text style={tw`text-lg font-medium mb-2`}>Location</Text>
      <TextInput
        style={tw`border rounded-lg bg-white p-4 mb-4`}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter location"
      />

      {/* Description Input */}
      <Text style={tw`text-lg font-medium mb-2`}>Description Details</Text>
      <TextInput
        style={tw`border rounded-lg bg-white p-4 mb-4 h-32`}
        value={description}
        onChangeText={setDescription}
        // placeholder="Enter description"
        multiline
      />

      {/* Required Items List */}
      <Text style={tw`text-lg font-medium mb-2`}>Required Items At Shift</Text>
      {requiredItems.map((item, index) => (
              <ItemsList
                key={index}
                item={item.item}
              />
            ))}

      {/* Items Not Allowed List */}
      <Text style={tw`text-lg font-medium mt-4 mb-2`}>Items Not Allowed At Shift</Text>
      {requiredItems.map((item, index) => (
              <ItemsList
                key={index}
                item={item.item}
              />
            ))}

      {/* Proceed Button */}
      <ActionButton
      className='mt-1'
      onPress={() => router.push({
        pathname: "/shifts/ShiftDetailsPreview",
        params: {
          shiftType: shiftType,
          date: date,
          time: time,
          endTime: endTime,
          hourlyRate: hourlyRate,
          numberOfHours: numberOfHours,
          numberOfOpenings: numberOfOpenings,
          location: location,
          description: description
        }
      })}
      label='Proceed'
      isEnabled={true}
     />

     <Image 
      source={images.logowithoutcaption} 
      style={tw`absolute bottom-0 left-0`}
     />

      {/* Footer */}
      <View style={tw`mt-20 flex items-center`}>
       <Image source={images.logowithcaption} />
      </View>
    </ScrollView>
    </View>
  );
};



const ItemsList: React.FC<itemListProps> = ({ item }) => {
  const [ isSelected, setIsSelected] = useState(false);
  const radioIcon = isSelected ?
    images.radiochecked :
    images.radiounchecked;
  return (
    
    <View style={tw`flex-row items-center mb-2`}>
          <Text style={tw`flex-1`}>{item}</Text>
          <TouchableOpacity onPress={()=> setIsSelected(!isSelected)}>
          <Image source={radioIcon}/>
          </TouchableOpacity>
        </View>
  );
};


export default CreateShiftContinuedScreen;
