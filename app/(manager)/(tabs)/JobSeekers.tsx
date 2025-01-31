import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, LogBox, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import tw from "twrnc";
import EmployersListItem from "../components/EmployersListItem";
import { images } from "@/assets/images";
import { router } from "expo-router";
import { UserDataProps } from "./types";
import { ShiftDetailsData, UserData } from "@/assets/data/Data";
import JobCard from "../components/JobCard";



const Employers: React.FC = () => {

  const [tab, setTab] = useState("approved");
  const [approved, setApprovedData] = useState<UserDataProps[]>([]);
  const [pending, setPendingData] = useState<UserDataProps[]>([]);
  const [requested, setRequestedData] = useState<UserDataProps[]>([]);
  const [loading, setLoading] = useState(true);

  //Loading from Database -----------------------------------------------------------------------------------------------
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    setTimeout(() => {
      setApprovedData(UserData); // Using imported JSON data
      setPendingData(UserData); // Using imported JSON data
      setRequestedData(UserData); // Using imported JSON data
      setLoading(false);
    }, 1000);
  }, []);


  return (
    <View style={tw`flex-1 overflow-hidden flex-col items-center w-full bg-zinc-100`}>

      {/* Tabs section--------------------------------------------------------------------------------- */}
       <View style={tw`flex flex-row items-start gap-2.5 w-64 max-w-full rounded-none w-full mt-8`}>

                <TouchableOpacity onPress={() => setTab("approved")}>
                        <Text style={tw`grow text-base text-stone-900 font-extrabold tracking-tight leading-loose ${tab=="approved" ? `text-green-700 underline` : ``} `}>Approved</Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity onPress={() => setTab("pending")}>
                        <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose ${tab=="pending" ? `text-green-700 underline` : ``}`}>Pending</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity onPress={() => setTab("requested")}>
                        <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose ${tab=="requested" ? `text-green-700 underline` : ``}`}>Requested</Text>
                </TouchableOpacity>
    </View>

    {/* Content section---------------------------------------------------------------------------------------------------------- */}
      <View style={tw`mt-4`}>
      <ScrollView>


      { tab == "approved" ? 
        <SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
        
        {loading ? (
          <View style={tw`mt-[50%]`}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <SafeAreaView style={tw`w-full`}>
        <FlatList
          data={approved}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => router.push({
              pathname: '/screens/ProfileDetailsEmployee',
              params: {
                id: item.id,
                approvalStatus: item.approvalStatus
              } 
            })}>
              <EmployersListItem 
       avatar={images.avatarverified}
       name = {item.name}
       ratings={+item.rating}
       assurance={+item.assurance}
      />
            </TouchableOpacity>
          )}
        />
        </SafeAreaView>
      )}
        
        
        </SafeAreaView>
 : tab == "pending" ? 


<SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
        
{loading ? (
<ActivityIndicator size="large" color="blue" />
) : (
<SafeAreaView style={tw`w-full`}>
<FlatList
  data={pending}
  keyExtractor={(item) => item.id}
  renderItem={({ item , index }) => (
    <TouchableOpacity onPress={() => router.push({
      pathname: '/screens/ProfileDetailsEmployee',
      params: {
        id: item.id,
        approvalStatus: item.approvalStatus
      } 
    })}>
      <EmployersListItem 
       avatar={images.avatarverified}
       name = {item.name}
       ratings={+item.rating}
       assurance={+item.assurance}
      />
    </TouchableOpacity>
  )}
/>
</SafeAreaView>
)}


</SafeAreaView> : 

// Pending Shifts Display ------------------------------------------------------------

<SafeAreaView style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>
        
{loading ? (
<ActivityIndicator size="large" color="blue" />
) : (
<SafeAreaView style={tw`w-full`}>
<FlatList
  data={requested}
  keyExtractor={(item) => item.id}
  renderItem={({ item, index }) => (
    <TouchableOpacity onPress={() => router.push({
      pathname: '/screens/ProfileDetailsEmployee',
      params: {
        id: item.id,
        approvalStatus: item.approvalStatus
      } 
    })}>
      <EmployersListItem 
       avatar={images.avatarverified}
       name = {item.name}
       ratings={+item.rating}
       assurance={+item.assurance}
      />
    </TouchableOpacity>
  )}
/>
</SafeAreaView>
)}


</SafeAreaView>

}
   
      </ScrollView>
      </View>
      
    </View>
  );
};

export default Employers;



