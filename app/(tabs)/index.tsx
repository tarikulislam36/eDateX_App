import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import tw from 'twrnc'


import { Ionicons } from '@expo/vector-icons'


const index = () => {
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
          {/* Profile Display for like  */}



        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index