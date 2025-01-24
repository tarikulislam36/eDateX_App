import { View, Text, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import twrnc from 'twrnc'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from "react-native-linear-gradient";
import Svg, { Path } from 'react-native-svg';
import { router, Link } from 'expo-router';
import BackButton from './BackButton';
const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <View style={twrnc`absolute top-5 z-5 left-0`} >
                <BackButton style={twrnc`absolute top-5`} />
            </View>
            <SafeAreaView style={twrnc` w-full h-full justify-center items-center `}>


                <Image
                    source={require('../img/bird.png')}
                    style={twrnc`w-60 h-30 mb-5`} //  logo
                />

                <Text style={twrnc`text-2xl font-bold text-red-900 mb-5`}>Create Account</Text>
                <View style={twrnc`w-full p-5 h-1/2 `}>

                    <TextInput style={twrnc`w-full h-12 border-4 rounded-lg px-2 mb-5 border-slate-100 bg-slate-100`} placeholder="Enter your First Name" />
                    <TextInput style={twrnc`w-full h-12 border-4 rounded-lg px-2 mb-7 border-slate-100 bg-slate-100`} placeholder="Enter 10 Digits phone number" />
                    <TouchableOpacity onPress={() => router.push('UserAbout')}>
                        <LinearGradient
                            colors={['#b30790', '#1adae8']}
                            style={twrnc`rounded-full px-32 py-4 `} // Continue Button
                        >
                            <Text style={twrnc`text-white font-bold text-lg`}>Continue</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* Social Sign in */}
                    <View style={twrnc`items-center justify-center mt-5`}>
                        <Text style={twrnc`text-center p-3 font-bold text-slate-500`}> Or</Text>
                        {/* GAuth Button */}
                        <TouchableOpacity style={twrnc`flex-row items-center bg-white rounded-md shadow p-3`}>
                            <View style={twrnc`mr-3`}>
                                <Svg width={24} height={24} viewBox="0 0 48 48">
                                    <Path
                                        fill="#EA4335"
                                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                    />
                                    <Path
                                        fill="#4285F4"
                                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                    />
                                    <Path
                                        fill="#FBBC05"
                                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                    />
                                    <Path
                                        fill="#34A853"
                                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                    />
                                    <Path fill="none" d="M0 0h48v48H0z" />
                                </Svg>
                            </View>
                            <Text style={twrnc`text-lg font-medium text-black`}>Sign in with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <LinearGradient
                            colors={['#b30790', '#1adae8']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ height: 2, borderRadius: 1 }}
                        />
                    </View>
                    <View style={twrnc`flex-row items-center justify-center`}>
                        <Text style={twrnc`text-slate-500`}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => router.push('Login')}>
                            <Text style={twrnc`text-blue-500 ml-2`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

export default App