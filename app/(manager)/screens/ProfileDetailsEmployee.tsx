import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Modal, TextInput, LogBox, ActivityIndicator, FlatList } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { images } from '@/assets/images';
import { ActionButton } from '../components/ActionButton';
import { router, useLocalSearchParams } from 'expo-router';
import { ShiftDetailsData, UserData } from '@/assets/data/Data';
import { EmployerDetailsDisplayProps, ShiftDetailsProps, UserDataProps } from './types';
import { SafeAreaView } from 'react-native-safe-area-context';
import RatingsMeter from './components/RatingsMeter';

const ViewProfile = () => {

  type ShiftDetailsProps = {
    id: string,
    shiftType: string;
    totalEarnings: string;
    date: string;
    time: string;
    endTime: string;
    hourlyRate: string;
    numberOfHours: string;
    numberOfOpenings: string;
    location: string;
    description: string;
    employee: string;
    employer: string;
    employerId: string;
    employeeId: string;
  }

  const { id  } = useLocalSearchParams<{id: string}>();


  const [isSuspendAccount, setIsSuspendAccount] = useState(false);
  const [isRemoveAccount, setIsRemoveAccount] = useState(false);
  const [showverifyAccountModal, setshowverifyAccountModal] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState<EmployerDetailsDisplayProps[]>([]);
  const [shiftsData, setShiftsData] = useState<ShiftDetailsProps[]>([]);
  const [user, setUserData] = useState<UserDataProps[]>([]);
  const [verified, setVerified] = useState(false);
 

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    
      setUserData(UserData); // Using imported JSON data
      setShiftsData(ShiftDetailsData);
   
  }, []);

  const filteredShifts = shiftsData.filter(shift =>
    shift.id === '1'
  );
  const filteredUser = user.filter(user =>
    user.id === id
  );

  console.log(filteredUser)

 
  return (
    
      <View style={tw`px-1 py-2 bg-gray-100`}>
        {/* Header */}
        
          <Text style={tw`self-start text-2xl font-bold text-stone-900`}>Employee Profile Details</Text>
          
          <ScrollView style={tw`flex w-full`}>
        {/* Profile Section */}

        <FlatList
        data={filteredUser}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SafeAreaView>
          <View style={tw`flex bg-gray-100 items-center justify-center mb-6 mt-8`}>

          <View style={tw`flex flex-row gap-3 w-full`}>
              <Image source={images.avatarverified} 
              style={tw`object-contain shrink-0 aspect-square w-[60px] self-center`} 
              />
              
              {/* Rating and Assurance */}
              <View style={tw`flex flex-col`}>
                <View style={tw`flex flex-row gap-0.5 items-center`}>
                  <Image source={images.star} 
                  style={tw`object-contain shrink-0 aspect-square w-[16px]`}
                  />
                  <Text>Rating</Text>
                </View>
                <View style={tw`flex-row items-center mt-0.5`}>
                <View style={tw`flex-row items-center mt-0.5`}>
                  <FontAwesome name="star" size={20} color="gray" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                </View>
                <View style={tw`flex absolute`}>

                <RatingsMeter rating={+item.rating} />
      </View>
      </View>

                
                <View style={tw`flex flex-row justify-between w-[87%]`}>
                <View style={tw`flex flex-row gap-0.5 items-center`}>
                  <Image source={images.ranking} 
                  style={tw`object-contain shrink-0 aspect-square w-[16px] mt-2`}
                  />
                <Text style={tw`mt-2`}>Assurance</Text>
                </View>
                <Text style={tw`text-sm text-gray-500 mt-2`}>{item.assurance}/100</Text>
                </View>
                <View style={tw`w-[90%] bg-gray-300 rounded-full h-2 mt-1`}>
                  <View style={tw`bg-green-500 h-2 rounded-full w-[${item.assurance}%]`} />
                </View>
                
              </View>
          </View>

          <Text style={tw`self-start text-2xl font-bold text-stone-900 mt-5`}>{item.name}</Text>
        </View>

        {/* Menu Section */}
        <View style={tw`mb-6 border-b border-t border-gray-200 py-4`}>
          
            <TouchableOpacity
            onPress={()=>router.push({
              pathname: "/screens/PersonalInfo",
              params: {
                id: id
              }
            })}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.personalinfo} />
                  <Text style={tw`text-base text-black`}>Personal Info</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => router.push({
              pathname: "/shifts/ShiftDetailsPosted",
              params: {
                shiftType: filteredShifts[0].shiftType,
                date: filteredShifts[0].date,
                time: filteredShifts[0].time,
                endTime: filteredShifts[0].endTime,
                hourlyRate: filteredShifts[0].hourlyRate,
                totalEarnings: filteredShifts[0].totalEarnings,
                location: filteredShifts[0].location,
                description: filteredShifts[0].description,
                employer: filteredShifts[0].employer,
                employee: filteredShifts[0].employee,
                employerId: filteredShifts[0].employerId,
                employeeId: filteredShifts[0].employeeId
              }
            })} 
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.jobdetails} />
                  <Text style={tw`text-base text-black`}>Job Details</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> router.push("/screens/test")}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.help} />
                  <Text style={tw`text-base text-black`}>Help</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{}}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.refer} />
                  <Text style={tw`text-base text-black`}>Refer Someone for $100</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{}}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.legal} />
                  <Text style={tw`text-base text-black`}>Legal</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>
        
        </View>

        {/* Gigs Taken */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-sm text-gray-400 font-bold mb-2`}>{shiftsData.length} Gigs Taken</Text>
          {shiftsData.map((gig, index) => (
            <View
              key={index}
              style={tw`flex-row items-center justify-between py-0.5`}
            >
              <Text style={tw`text-base text-black text-sm`}><Text style={tw`font-bold`}>{gig.shiftType}</Text> - {gig.employer}</Text>
              <TouchableOpacity onPress={() => router.push({
                pathname: "/shifts/ShiftDetailsTaken",
                params: {
                  shiftType: gig.shiftType,
                  date: gig.date,
                  time: gig.time,
                  endTime: gig.endTime,
                  hourlyRate: gig.hourlyRate,
                  totalEarnings: gig.totalEarnings,
                  numberOfHours: gig.numberOfHours,
                  numberOfOpenings: gig.numberOfOpenings,
                  location: gig.location,
                  description: gig.description,
                  employer: gig.employer,
                  employee: gig.employee,
                  employerId: gig.employerId,
                  employeeId: gig.employeeId
                }
              })}>
                <Text style={tw`text-green-600 font-bold underline`}>View Gig</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Account Verified Section */}
        { verified ?
        <View style={tw`mb-6 mt-5 items-center`}>
          <Text style={tw`text-2xl font-bold text-stone-900`}>Account Verified</Text>
          <Text style={tw`text-sm text-gray-500`}>Account setup is <Text style={tw`text-stone-900 font-bold`}>100%</Text> complete</Text>
        </View> :
        
        <View style={tw`mb-6 mt-5 items-center`}>
          <Text style={tw`text-2xl text-center font-bold text-stone-900`}>Account Verification Pending</Text>
          <Text style={tw`text-sm text-gray-500`}>Account setup is <Text style={tw`text-stone-900 font-bold`}>20%</Text> complete</Text>
        </View>
}
 
         {/* Buttons */}
         {/* <View style={tw`flex justify-around`}>
         
         </View> */}

        {/* Buttons */}
        <View style={tw`flex justify-around items-center`}>
          { !verified ? 
        <ActionButton 
         onPress={() => {
          setPassword('');
          setshowverifyAccountModal(true)}
         }
         className=' w-[97%]'
         isEnabled = {true}
         label='Verify Account'
         /> :
         <ActionButton 
         onPress={() => {
          setPassword('');
          setIsSuspendAccount(true)}}
         className=' w-[97%]'
         isEnabled = {false}
         label='Suspend Account'
         />}
         <ActionButton 
         onPress={() => {
          setPassword('');
          setIsRemoveAccount(true)}}
         className='bg-red-500 mt-2 mb-8 w-[97%]'
         isEnabled = {true}
         label='Remove Account'
         />
        </View>
        </SafeAreaView>
          
        )}
      />
        
        </ScrollView> 
  
{/* Modal section ---------------------------------------------------------------------------------------------------------------------------- */}

    {/* Verify Account Modal -----------------------------------------------*/}
    
      {/* Modal Container */}
      <Modal 
        visible={showverifyAccountModal} 
        onRequestClose={() => setshowverifyAccountModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
      <View style={tw`bg-white w-11/12 p-6 rounded-xl shadow-lg items-center self-center mt-auto mb-auto`}>
        {/* Close Button */}
        <TouchableOpacity 
      onPress={() => setshowverifyAccountModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>

        {/* Title */}
        <Text style={tw`self-start text-2xl font-bold text-stone-900 mt-6`}>
          Are You Sure You Want To Verify Account?
        </Text>

        {/* Description */}
        <Text style={tw`text-gray-600 text-center mt-5 mb-6`}>
          Account will be able to pick up or{'\n'}create shifts till you suspend or remove.{'\n'}{'\n'}Enter your password to confirm verification.
        </Text>

        <View style={tw`text-gray-600 self-start mt-3 mb-1`}>
        <Text style={tw`text-gray-600`}>Password</Text>
        </View>
        {/* Password Input */}
        <TextInput
          style={tw`border border-gray-300 rounded-lg p-3 mb-6 w-full`}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Verify button */}
        <View style={tw``}>
         {password === '1234' ?  <ActionButton 
            className='w-[193px] p-3'
            isEnabled={true}
            label='Verify'
            onPress={() => {
              setshowverifyAccountModal(false);
              setVerified(true);
            }}
        /> :
        <ActionButton 
            className='text-gray-300 w-[193px] p-3'
            isEnabled={false}
            label='Verify'
            onPress={() => null}
        />
        }
        </View>
      </View>


      </Modal>  
    {/* Suspend Account Modal -----------------------------------------------*/}
    
      {/* Modal Container */}
      <Modal 
        visible={isSuspendAccount} 
        onRequestClose={() => setIsSuspendAccount(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
      <View style={tw`bg-white w-11/12 p-6 rounded-xl shadow-lg items-center self-center mt-auto mb-auto`}>
        {/* Close Button */}
        <TouchableOpacity 
      onPress={() => setIsSuspendAccount(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>

        {/* Title */}
        <Text style={tw`self-start text-2xl font-bold text-stone-900 mt-6`}>
          Are You Sure You Want To Suspend Account?
        </Text>

        {/* Description */}
        <Text style={tw`text-gray-600 text-center mt-5 mb-6`}>
          Account won’t be able to pick up or{'\n'}create shifts till you unsuspend.{'\n'}Enter your password to confirm suspension.
        </Text>

        <View style={tw`text-gray-600 self-start mt-3 mb-1`}>
        <Text style={tw`text-gray-600`}>Password</Text>
        </View>
        {/* Password Input */}
        <TextInput
          style={tw`border border-gray-300 rounded-lg p-3 mb-6 w-full`}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Suspend Button */}
        <View style={tw``}>
        {password === '1234' ?
            <ActionButton 
            className='w-[193px] p-3'
            isEnabled={true}
            label='Suspend'
            onPress={() => setIsSuspendAccount(false)}
        /> : 
        <ActionButton 
            className='text-gray-300 w-[193px] p-3'
            isEnabled={false}
            label='Suspend'
            onPress={() => null}
        />
      }
        </View>
      </View>
      </Modal>


      {/* Remove Account Modal -----------------------------------------------*/}
    
      {/* Modal Container */}
      <Modal 
        visible={isRemoveAccount} 
        onRequestClose={() => setIsRemoveAccount(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
      <View style={tw`bg-white w-11/12 p-6 rounded-xl shadow-lg items-center self-center mt-auto mb-auto`}>
        {/* Close Button */}
        <TouchableOpacity 
      onPress={() => setIsRemoveAccount(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>

        {/* Title */}
        <Text style={tw`text-center text-2xl font-bold text-stone-900 mt-6`}>
          Are You Sure You Want To Delete Account?
        </Text>

        {/* Description */}
        <Text style={tw`text-gray-600 text-center mt-5`}>
            Account data would be removed from database.{'\n'}Enter your password to confirm deletion.
        </Text>

        <View style={tw`text-gray-600 self-start mt-3 mb-1`}>
        <Text style={tw`text-gray-600 mt-5`}>Password</Text>
        </View>
        {/* Password Input */}
        <TextInput
          style={tw`border border-gray-300 rounded-lg p-3 mb-6 w-full`}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Remove Button */}
        <View style={tw``}>
        {password === '1234' ?
            <ActionButton 
            className='text-gray-300 w-[193px] p-3 bg-red-500'
            isEnabled={true}
            label='Delete'
            onPress={() => setIsRemoveAccount(false)}
        /> :
        <ActionButton 
            className='text-gray-300 w-[193px] p-3'
            isEnabled={false}
            label='Delete'
            onPress={() => null}
        />
    }
        </View>
      </View>
      </Modal>
    </View>

    
    
  );

}; 


export default ViewProfile;
