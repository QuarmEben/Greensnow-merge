import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import { ActionButton } from './components/ActionButton';
import { images } from '@/assets/images';

type RateCompletedShiftScreenProps = {};

const RateCompletedShiftScreen: React.FC<RateCompletedShiftScreenProps> = () => {
  const [onTime, setOnTime] = useState<string>('Yes');
  const [conduct, setConduct] = useState<string>('');
  const [workAgain, setWorkAgain] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [completionRating, setCompletionRating] = useState<string>('');

  return (
    <View style={tw`flex-1 p-6 bg-gray-100 w-full max-w-[480px]`}>
        <Text style={tw`text-2xl font-bold mb-2`}>Rate Completed Shift</Text>
      <Text style={tw`text-gray-500 mb-6`}>
        Discover millions of gigs and get in touch with gig hirers as seamless as it comes
      </Text>
    <ScrollView contentContainerStyle={tw`w-full`}>
      

      {/* Did The Picker Get On Time? */}
      <Text style={tw`text-lg font-medium mb-2`}>Did The Picker Get On Time?</Text>
      <View style={tw`border rounded-lg bg-white mb-4`}>
        <Picker selectedValue={onTime} onValueChange={(itemValue) => setOnTime(itemValue)}>
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>

      {/* How Was The Conduct? */}
      <Text style={tw`text-lg font-medium mb-2`}>How Was The Conduct?</Text>
      <View style={tw`border rounded-lg bg-white mb-4`}>
        <Picker selectedValue={conduct} onValueChange={(itemValue) => setConduct(itemValue)}>
          <Picker.Item label="Excellent" value="Excellent" />
          <Picker.Item label="Good" value="Good" />
          <Picker.Item label="Average" value="Average" />
          <Picker.Item label="Poor" value="Poor" />
        </Picker>
      </View>

      {/* Would You Like To Work With Picker Again? */}
      <Text style={tw`text-lg font-medium mb-2`}>Would You Like To Work With Picker Again?</Text>
      <View style={tw`border rounded-lg bg-white mb-4`}>
        <Picker selectedValue={workAgain} onValueChange={(itemValue) => setWorkAgain(itemValue)}>
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>

      {/* Any Additional Info? */}
      <Text style={tw`text-lg font-medium mb-2`}>Any Additional Info?</Text>
      <View style={tw`border rounded-lg bg-white mb-4`}>
        <Picker selectedValue={additionalInfo} onValueChange={(itemValue) => setAdditionalInfo(itemValue)}>
          <Picker.Item label="None" value="None" />
          <Picker.Item label="Provided" value="Provided" />
        </Picker>
      </View>

      {/* Rate Gig Completion (1-10) */}
      <Text style={tw`text-lg font-medium mb-2`}>Rate Gig Completion (1-10)</Text>
      <View style={tw`border rounded-lg bg-white mb-4`}>
        <Picker selectedValue={completionRating} onValueChange={(itemValue) => setCompletionRating(itemValue)}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((rating) => (
            <Picker.Item key={rating} label={rating.toString()} value={rating.toString()} />
          ))}
        </Picker>
      </View>

      {/* Proceed Button */}
      <ActionButton
      className='mt-1'
      onPress={()=>{}}
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

export default RateCompletedShiftScreen;
