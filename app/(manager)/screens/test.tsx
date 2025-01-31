import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { ShiftDetailsProps } from "./types";
import { ShiftDetailsData } from "@/assets/data/Data";

type User = {
  id: number;
  name: string;
  age: number;
};

const users: User[] = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 27 },
  { id: 4, name: "David", age: 24 },
];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [gigsData, setGigsData] = useState<ShiftDetailsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
 
  
  
 
  useEffect(() => {
    setGigsData(ShiftDetailsData);
    // setTimeout(() => {
      
    // }, 1000);
  }, []);

  // Filter users dynamically based on search input
  const filteredUsers = gigsData.filter(user =>
    user.id === '1'
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search by name..."
        value={searchText}
        onChangeText={setSearchText}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8,
        }}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginBottom: 5 }}>{item.employer} - {item.employee}</Text>
        )}
      />
    </View>
  );
};

export default App;
