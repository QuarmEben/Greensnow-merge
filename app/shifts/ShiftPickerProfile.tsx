import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import tw from 'twrnc';
import { StatItemProps } from './types';
import { images } from '@/assets/images';

const ShiftPickerDetails: React.FC = () => {
    const stats = [
        { iconUrl: images.star, count: 15 },
        { iconUrl: images.rating, count: 32 }
      ];
      
  return (
    <View style={tw`flex-1 bg-gray-100 p-2`}>
      {/* Header */}
      
      <Text style={tw`text-2xl font-bold mb-6`}>Shift Picker Details</Text>

      {/* Profile Section */}
      <View style={tw`flex flex-row gap-4`}>
          <Image
            source={ images.avatarverified }
            style={tw`object-contain shrink-0 aspect-square w-[80px]`}
          />
          <View style={tw`flex flex-col gap-2 self-start mt-3`}>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                icon={stat.iconUrl}
                count={stat.count}
              />
            ))}
          </View>
          
        </View>

        {/* Horizontal line */}
        <View style = {tw`shrink-0 mt-1 w-[320px] self-center h-px border border-solid border-stone-300`} />
      
      {/* Contact Section */}
      <View style={tw`p-4`}>
        <View style={tw`flex-col items-center mb-4`}>
        <View style={tw`flex-row items-center self-start mb-4  gap-2`}>
          <Image source={images.contactname} />
          <Text style={tw`text-lg font-medium font-bold`}>Evanela Aba Forson</Text>
        </View>
        <View style={tw`flex-row items-center self-start gap-2`}>
          <Image source={images.contactphone} />
          <Text style={tw`text-lg font-medium font-bold`}>+1 (542) 696-3261</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShiftPickerDetails;

const StatItem: React.FC<StatItemProps> = ({ icon, count }) => {
    return (
      <View style={tw`flex flex-row gap-2 items-center w-full`}>
        <Image
          source={ icon }
          style={tw`object-contain shrink-0 self-stretch my-auto w-[16.67px] aspect-square`}
        />
        <View style={tw`self-stretch my-auto`}>
          <Text>{count}</Text>
        </View>
      </View>
    );
  };
