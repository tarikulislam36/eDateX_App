import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import tw from 'twrnc';
import { View, StatusBar, SafeAreaView } from 'react-native';

// Helper function for setting tab icons
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />

      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: tw`bg-white border-t border-gray-200`, // Bottom tab bar styling
          tabBarActiveTintColor: '#6f9ec9', // Active tab color
          tabBarInactiveTintColor: '#ababb0',
          headerShown: false, // Hides the top header

          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === 'index') iconName = 'compass'; // FontAwesome Icon
            else if (route.name === 'Nearby') iconName = 'location-arrow';
            else if (route.name === 'hub') iconName = 'th-large';
            else if (route.name === 'like') iconName = 'heart';
            else if (route.name === 'Messages') iconName = 'comments';
            else if (route.name === 'profile') iconName = 'user';


            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Define your tab screens here */}
        <Tabs.Screen name="index" options={{ tabBarLabel: 'Explore' }} />
        <Tabs.Screen name="Nearby" options={{ tabBarLabel: 'Nearby' }} />
        <Tabs.Screen name="hub" options={{ tabBarLabel: 'Hub' }} />
        <Tabs.Screen name="like" options={{ tabBarLabel: 'Like' }} />
        <Tabs.Screen name="Messages" options={{ tabBarLabel: 'Messages' }} />
        <Tabs.Screen name="profile" options={{ tabBarLabel: 'Profile' }} />
      </Tabs>

    </>
  );
}
