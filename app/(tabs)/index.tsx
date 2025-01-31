import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import tw from 'twrnc'


import { Ionicons } from '@expo/vector-icons'
// dummy data

const profiles = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 24,
    profession: 'Software Engineer',
    location: 'Mumbai, India',
    hobbies: ['Traveling', 'Photography', 'Dancing'],
    lookingFor: 'Friendship, Life Partner',
    images: [
      'https://randomuser.me/api/portraits/women/20.jpg',
      'https://randomuser.me/api/portraits/women/21.jpg',
    ],
  },
  {
    id: 2,
    name: 'Rahul Verma',
    age: 26,
    profession: 'Doctor',
    location: 'Delhi, India',
    hobbies: ['Reading', 'Music', 'Gaming'],
    lookingFor: 'Long Term Fun',
    images: [
      'https://randomuser.me/api/portraits/men/30.jpg',
      'https://randomuser.me/api/portraits/men/31.jpg',
    ],
  },
];

const index = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const profile = profiles[currentProfileIndex];

  const nextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
      setCurrentImageIndex(0); // Reset image index for new profile
    }
  };

  const prevProfile = () => {
    if (currentProfileIndex > 0) {
      setCurrentProfileIndex(currentProfileIndex - 1);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < profile.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={tw`flex-row justify-between items-center bg-white border-b border-gray-300`}>
            {/* Left corner text */}
            <Text style={tw`text-lg font-bold p-2`}>eSoco</Text>

            <View style={tw`flex-row`}>
              {/* Filter button */}
              <TouchableOpacity style={tw`p-2`}>
                <Ionicons name="options-outline" size={24} color="black" />
              </TouchableOpacity>

              {/* Notification button */}
              <TouchableOpacity style={tw`p-2`}>
                <Ionicons name="notifications-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Profile Display   */}
          <View style={tw` items-center justify-center bg-slate-200 p-1 m-2`}>
            <View style={tw`bg-white p-2 rounded-lg w-3/3`}>
              <Image
                source={{ uri: profile.images[currentImageIndex] }}
                style={tw`w-[100%] h-100 rounded`}
              />

            </View>

            <View style={tw`flex-row  items-start`}>
              {/* about */}
              <View style={tw`p-2`}>
                <Text style={tw`text-xl font-bold`}>{profile.name}, {profile.age}</Text>
                <Text style={tw`text-sm`}>{profile.profession}</Text>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-sm`}>{profile.location}</Text>
                </View>
              </View>
            </View>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index


// Styles
