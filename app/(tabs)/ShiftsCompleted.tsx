import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { ActionButton } from './components/ActionButton';
import { images } from '@/assets/images';

const ShiftsCompleted: React.FC = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      {/* Icon section */}
      <View style={tw`flex-row justify-center mb-8`}>
        <View style={tw`relative`}>
          <Image source={images.completed} />
        </View>
      </View>

      {/* Shift submission message */}
      <Text style={tw`text-xl text-center mb-4 font-extrabold text-xl tracking-tight leading-1`}>
        Your shift has been {'\n'}submitted.
      </Text>
      <Text style={tw`text-zinc-600 text-center tracking-tight text-xs text-neutral-500`}>
        You will be notified once your shift has{'\n'}been approved.
      </Text>

      <View style={tw`self-center`}>
      <ActionButton 
      className=''
      onPress={()=>{}}
      label='Continue'
      isEnabled = {true}
      />
      </View>
    </View>
  );
};

export default ShiftsCompleted;
