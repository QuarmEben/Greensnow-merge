import { images } from "@/assets/images";
import { router } from "expo-router";
import * as React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import LanguageSwitcher from "./LanguageSwitcher";

export function HeaderShifts() {
  return (
    <View style = {tw`flex flex-row mt-2 gap-10 justify-between items-start self-stretch`}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={images.backbtn}
        />
        </TouchableOpacity>
        <LanguageSwitcher 
          currentLanguage="EN"
          icon={images.flag}
        />
      </View>
  );
}
