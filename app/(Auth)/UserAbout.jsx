import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, Image, StyleSheet, StatusBar } from 'react-native';
import tw from 'twrnc';
import LinearGradient from "react-native-linear-gradient";
import Svg from 'react-native-svg';



const UserAbout = () => {
    const [step, setStep] = useState(1); // Current step
    const [formData, setFormData] = useState({
        gender: '',
        dateOfBirth: '',
        interests: '',
        location: '',
        profilePicture: '',
    }); // User data
    const totalSteps = 5; // Total number of steps

    const handleNext = () => {
        // Validation for each step
        if (step === 1 && !formData.gender) {
            Alert.alert('Validation Error', 'Please select your gender.');
            return;
        }
        if (step === 2 && !formData.dateOfBirth) {
            Alert.alert('Validation Error', 'Please enter your date of birth.');
            return;
        }
        if (step === 3 && !formData.interests) {
            Alert.alert('Validation Error', 'Please select your interests.');
            return;
        }
        if (step === 4 && !formData.location) {
            Alert.alert('Validation Error', 'Please enter your location.');
            return;
        }
        if (step === 5 && !formData.profilePicture) {
            Alert.alert('Validation Error', 'Please upload your profile picture.');
            return;
        }
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleFinish = () => {
        Alert.alert('Success', 'User Details Completed!', [{ text: 'OK' }]);
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <View>
                        <Image
                            source={require('../img/Gender.png')}
                            style={tw`w-60 h-40 mb-5`} // logo
                        />
                        <Text style={tw`text-lg text-center mb-3`}>Select your gender</Text>
                        <View style={tw`flex-row justify-center`}>
                            <TouchableOpacity
                                onPress={() => setFormData({ ...formData, gender: 'Male' })}
                                style={tw` flex-1 bg-blue-100 p-3 justify-center items-center rounded-md mx-0.8  h-45 w-1/2 `} // button
                            >
                                <Image
                                    source={require('../img/male.png')}
                                    style={tw`w-20 h-20 mb-2 relative left-1.5`}
                                />
                                <Text style={tw`text-green-900 text-xl relative right-1.5 `}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setFormData({ ...formData, gender: 'Female' })}
                                style={tw` flex-1 bg-blue-100 p-3 justify-center items-center rounded-lg mx-0.8  h-45 w-1/2 `} // button
                            >
                                <Image
                                    source={require('../img/female.png')}
                                    style={tw`w-20 h-20 mb-2 relative left-0`}
                                />
                                <Text style={tw`text-green-900 text-lg`}>Female</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            case 2:
                return (
                    <View>
                        <Text style={tw`text-lg text-center mb-3`}>Enter your date of birth</Text>
                        <TextInput
                            style={tw`border border-gray-300 p-3 rounded-md`}
                            placeholder="YYYY-MM-DD"
                            value={formData.dateOfBirth}
                            onChangeText={(text) => setFormData({ ...formData, dateOfBirth: text })}
                        />
                    </View>
                );
            case 3:
                return (
                    <View>
                        <Text style={tw`text-lg text-center mb-3`}>Select your interests</Text>
                        <TextInput
                            style={tw`border border-gray-300 p-3 rounded-md`}
                            placeholder="e.g., Music, Sports"
                            value={formData.interests}
                            onChangeText={(text) => setFormData({ ...formData, interests: text })}
                        />
                    </View>
                );
            case 4:
                return (
                    <View>
                        <Text style={tw`text-lg text-center mb-3`}>Enter your location</Text>
                        <TextInput
                            style={tw`border border-gray-300 p-3 rounded-md`}
                            placeholder="City, Country"
                            value={formData.location}
                            onChangeText={(text) => setFormData({ ...formData, location: text })}
                        />
                    </View>
                );
            case 5:
                return (
                    <View>
                        <Text style={tw`text-lg text-center mb-3`}>Upload your profile picture</Text>
                        <TextInput
                            style={tw`border border-gray-300 p-3 rounded-md`}
                            placeholder="Profile Picture URL"
                            value={formData.profilePicture}
                            onChangeText={(text) => setFormData({ ...formData, profilePicture: text })}
                        />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={tw`h-full w-full`}>
            <View style={tw`flex-1 p-5`}>


                {/* Status Bar */}
                <View style={tw`mb-5`}>
                    <View style={tw`flex-row items-center`}>
                        {[...Array(totalSteps)].map((_, index) => (
                            <LinearGradient
                                key={index}
                                colors={index < step ? ['#34D399', '#059669'] : ['#D1D5DB', '#D1D5DB']}
                                style={tw`h-2 flex-1 mx-1 rounded-full`}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            />
                        ))}
                    </View>
                </View>

                {/* Step Content */}
                <View style={tw`flex-1 justify-center`}>
                    {renderStepContent()}
                </View>

                {/* Buttons */}
                <View style={tw`flex-row justify-between mt-5`}>
                    {step > 1 && (
                        <TouchableOpacity
                            onPress={handleBack}
                            style={tw`bg-gray-500 p-3 rounded-md`}
                        >
                            <Text style={tw`text-white text-lg`}>Back</Text>
                        </TouchableOpacity>
                    )}
                    {step < totalSteps ? (
                        <TouchableOpacity
                            onPress={handleNext}
                            style={tw`bg-blue-500 p-3 rounded-md`}
                        >
                            <Text style={tw`text-white text-lg`}>Next</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={handleFinish}
                            style={tw`bg-green-500 p-3 rounded-md`}
                        >
                            <Text style={tw`text-white text-lg`}>Finish</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default UserAbout;


// Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF", // Fallback background
    },
    animatedContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center",
    },
    gradient: {
        width: 1200, // Wider to ensure smooth animation
        height: 1000, // Enough height to cover screen
        borderRadius: 600, // Curve for smooth gradient edges
    },
});
