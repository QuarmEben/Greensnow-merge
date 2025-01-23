import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import  UserHeader  from "./components/UserHeader";
import { images } from "@/assets/images";

const HomeNoPost: React.FC = () => {
  return (
    <View style={tw`flex-1 overflow-hidden flex-col items-center px-3 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <UserHeader 
      avatarUrl={images.avatarnotverified}
      username="Jacob Construction"
      />
      <Image
        source={images.clipboard}
        style = {tw`object-contain mt-20 max-w-full aspect-[1.03] w-[237px] h-[231px]`}
      />
      <View style = {tw`mt-16 text-2xl font-extrabold tracking-tighter text-stone-900 w-[251px]`}>
        <Text style = {tw`text-2xl font-extrabold text-center tracking-tighter leading-6 text-stone-900`}>
        You have not{'\n'}posted a shift yet
        </Text>
      </View>
      <View style = {tw`mt-4 w-[232px]`}>
        <Text style = {tw`text-xs text-center tracking-tight text-zinc-500`}>
        No appointment shifts have been made by you yet.
        </Text>
      </View>
      <View style = {tw`mt-4 w-[232px]`}>
        <Text style = {tw`text-xs text-center tracking-tight text-zinc-500`}>
        You can try <Text style = {tw`font-extrabold text-stone-900 underline`}>creating a shift</Text>
        </Text>
      </View>
      
    </View>
  );
};

export default HomeNoPost;