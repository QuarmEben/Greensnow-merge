import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import tw from "twrnc";
import  UserHeader  from "./components/UserHeader";
import  NotificationItem  from "./components/NotificationItem";
import { images } from "@/assets/images";



const Notifications: React.FC = () => {
  return (
    <View style={tw`flex-1 overflow-hidden flex-col items-center px-4 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <UserHeader 
      avatarUrl={images.avatarverified}
      username="Jacob Construction"
      />
      <View style={tw`mt-4`}>
      <ScrollView>
      <NotificationItem 
        iconUrl={images.bag}
        title="Someone took the shift"
        message="Review shift details and prepare for it."
      />
      <NotificationItem 
        iconUrl={images.bag}
        title="Someone took the shift"
        message="Review shift details and prepare for it."
      />
      <NotificationItem 
        iconUrl={images.bag}
        title="Someone took the shift"
        message="Review shift details and prepare for it."
      />
      </ScrollView>
      </View>
      
    </View>
  );
};

export default Notifications;



