import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageStyle, LogBox, FlatList } from 'react-native';
import tw from 'twrnc';
import { StatItemProps, UserDataProps } from './types';
import { images } from '@/assets/images';
import { ShiftDetailsData, UserData } from '@/assets/data/Data';
import { useLocalSearchParams } from 'expo-router';

const ShiftPickerDetails: React.FC = () => {
    const stats = [
        { iconUrl: images.star, count: 15 },
        { iconUrl: images.rating, count: 32 }
      ];

      const { id } = useLocalSearchParams<{id: string}>();
      const [data, setData] = useState<UserDataProps[]>([]);
      // const [filteredData, setFilteredData] = useState<ShiftDetailsProps[]>([]);
      const [loading, setLoading] = useState(true);
      //let formattedendTime = '';
    
      useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        setTimeout(() => {
          setData(UserData); // Using imported JSON data
          setLoading(false);
        }, 1000);
      }, []);

       // Filter users dynamically based on search input
  const filteredUsers = data.filter(user =>
    user.id === id
  );
      
  return (
    <View style={tw`flex-1 bg-gray-100 p-2`}>
      {/* Header */}
      
      <Text style={tw`text-2xl font-bold mb-6`}>Shift Picker Details</Text>

      {/* Flatlist--------------------------------------------------------- */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          

<View style={tw`flex`}>
      {/* Profile Section */}
      <View style={tw`flex flex-row gap-4`}>
          <Image
            source={ images.avatarverified }
            style={tw`object-contain shrink-0 aspect-square w-[80px]`}
          />
          {/* Stat section */}
          <View style={tw`flex flex-col gap-2 self-start mt-3`}>
          <View style={tw`flex flex-row gap-2 items-center w-full`}>
        <Image
          source={ images.star }
          style={tw`object-contain shrink-0 self-stretch my-auto w-[16.67px] aspect-square`}
        />
        <View style={tw`self-stretch my-auto`}>
          <Text>{item.rating}</Text>
        </View>
      </View>

      <View style={tw`flex flex-row gap-2 items-center w-full`}>
        <Image
          source={ images.rating }
          style={tw`object-contain shrink-0 self-stretch my-auto w-[16.67px] aspect-square`}
        />
        <View style={tw`self-stretch my-auto`}>
          <Text>{item.assurance}</Text>
        </View>
      </View>
          </View>
          
        </View>

        {/* Horizontal line */}
        <View style = {tw`shrink-0 mt-1 w-[320px] self-center mt-3 h-px border border-solid border-stone-300`} />
      
      {/* Contact Section */}
      <View style={tw`pt-4 self-start`}>
        <View style={tw`flex-col items-start mb-4`}>
        <View style={tw`flex-row items-center self-start mb-4  gap-2`}>
          <Image source={images.contactname} />
          <Text style={tw`text-lg font-medium font-bold`}>{item.name}</Text>
        </View>
        <View style={tw`flex-row items-center self-start gap-2`}>
          <Image source={images.contactphone} />
          <Text style={tw`text-lg font-medium font-bold`}>{item.phone}</Text>
          </View>
        </View>
      </View>
    </View>


        )}
      />
      
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
