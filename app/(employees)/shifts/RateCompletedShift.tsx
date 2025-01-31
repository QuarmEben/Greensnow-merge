import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import { ActionButton } from './components/ActionButton';
import { images } from '@/assets/images';
import { router } from 'expo-router';

type RateCompletedShiftScreenProps = {};

const RateCompletedShiftScreen: React.FC<RateCompletedShiftScreenProps> = () => {
  const [onTime, setOnTime] = useState<string>('Yes');
  const [conduct, setConduct] = useState<string>('');
  const [workAgain, setWorkAgain] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [completionRating, setCompletionRating] = useState<string>('');

  const [isRateCompletedModal, setIsRateCompletedModal] = useState(false);

  return (
    <View style={tw`flex-1 p-1 bg-gray-100 w-full max-w-[480px]`}>
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
      onPress={()=>setIsRateCompletedModal(true)}
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


          {/* Rating Completed modal -----------------------------------------------*/}
    <Modal 
        visible={isRateCompletedModal} 
        onRequestClose={() => setIsRateCompletedModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-auto mb-auto`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-[322px] bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setIsRateCompletedModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Rating Completed</Text>
            </View>
            
            <View style={tw`self-center mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              Rating details would be sent to {"\n"}management to access shift and {"\n"}improve your experience.{"\n"}Thank you!
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
                setIsRateCompletedModal(false);
                router.replace('/')
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

export default RateCompletedShiftScreen;
