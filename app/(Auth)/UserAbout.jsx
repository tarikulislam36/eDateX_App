import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, Image, StyleSheet, StatusBar } from 'react-native';
import tw from 'twrnc';
import LinearGradient from "react-native-linear-gradient";
import Svg from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import SelectInstitute from './SelectInstitute';
import ProfessionSection from './ProfessionSection';


const UserAbout = () => {
    const [step, setStep] = useState(1); // Current step
    const [formData, setFormData] = useState({
        gender: '',
        dateOfBirth: '',
        interests: '',
        location: '',
        profilePicture: '',
    }); // User data
    const totalSteps = 6; // Total number of steps
    const [education, setEducation] = useState(null); // Selected education qualification
    const [selectedLookingFor, setSelectedLookingFor] = useState([]);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    // Photo Upload

    const handleLookingFor = (option) => {
        if (selectedLookingFor.includes(option)) {
            setSelectedLookingFor(
                selectedLookingFor.filter((item) => item !== option)
            );
        } else if (selectedLookingFor.length < 2) {
            setSelectedLookingFor([...selectedLookingFor, option]);
        }
    };

    const handleHobbies = (hobby) => {
        if (selectedHobbies.includes(hobby)) {
            setSelectedHobbies(
                selectedHobbies.filter((item) => item !== hobby)
            );
        } else if (selectedHobbies.length < 5) {
            setSelectedHobbies([...selectedHobbies, hobby]);
        }
    };


    const handleNext = () => {
        // Validation for each step
        if (step === 1 && !formData.gender) {
            Alert.alert('Validation Error', 'Please select your gender.');
            return;
        }
        if (step === 2 && formData.dateOfBirth) {
            Alert.alert('Validation Error', 'Please enter your date of birth.');
            return;
        }
        if (step === 3 && formData.interests) {
            Alert.alert('Validation Error', 'Please select your interests.');
            return;
        }
        if (step === 4 && formData.location) {
            Alert.alert('Validation Error', 'Please enter your location.');
            return;
        }
        if (step === 5 && formData.profilePicture) {
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



                        <Text style={tw`text-lg text-center mb-3`}>Select your date of birth</Text>
                        <View style={tw`flex-row justify-center mb-18`}>

                            <Picker
                                selectedValue={formData.dateOfBirth.split('/')[0]}
                                style={tw`bg-gray-200  border border-gray-300 p-3 rounded-lg w-1/3 mx-1 h-13`}
                                onValueChange={(itemValue) =>
                                    setFormData({ ...formData, dateOfBirth: `${itemValue}/${formData.dateOfBirth.split('/')[1]}/${formData.dateOfBirth.split('/')[2]}` })
                                }>
                                {[...Array(31).keys()].map(day => (
                                    <Picker.Item key={day + 1} label={`${day + 1}`} value={`${day + 1}`} />
                                ))}
                            </Picker>
                            <Picker
                                selectedValue={formData.dateOfBirth.split('/')[1]}
                                style={tw`bg-gray-200 h-13 border border-gray-300 p-3 rounded-md w-1/3 mx-1`}
                                onValueChange={(itemValue) =>
                                    setFormData({ ...formData, dateOfBirth: `${formData.dateOfBirth.split('/')[0]}/${itemValue}/${formData.dateOfBirth.split('/')[2]}` })
                                }>
                                {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(month => (
                                    <Picker.Item key={month} label={month} value={month} />
                                ))}
                            </Picker>
                            <Picker
                                selectedValue={formData.dateOfBirth.split('/')[2]}
                                style={tw`bg-gray-200 h-13 border border-gray-300 p-3 rounded-md w-1/3 mx-1`}
                                onValueChange={(itemValue) =>
                                    setFormData({ ...formData, dateOfBirth: `${formData.dateOfBirth.split('/')[0]}/${formData.dateOfBirth.split('/')[1]}/${itemValue}` })
                                }>
                                {[...Array(100).keys()].reverse().map(year => (
                                    <Picker.Item key={year + 1920} label={`${year + 1920}`} value={`${year + 1920}`} />
                                ))}
                            </Picker>
                        </View>

                        {/* Gender Section */}

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
                        {/* Education Qualification Section */}
                        <Text style={tw`text-lg text-center mb-4`}>Select your education qualification</Text>
                        {[
                            'Bachelors',
                            'Masters',
                            'PhD',
                            'High School',
                            'Pursuing Bachelors',
                            'Pursuing Masters',
                            'Pursuing PhD',
                        ].map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={tw`p-3 border rounded-md mb-2 ${education === item ? 'bg-blue-500' : 'bg-gray-200'}`}
                                onPress={() => setEducation(item)}
                            >
                                <Text style={tw`${education === item ? 'text-white' : 'text-black'} text-center`}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                );
            case 3:
                return (
                    <View style={tw`flex-1 p-5`}>
                        {/* select Institue */}
                        <SelectInstitute
                            onInstituteSelect={(institute) => {
                                alert(`Selected Institute: ${institute.name}, ${institute.country}`);
                                handleNext(); // Proceed to the next step after selection
                            }}
                        />



                    </View>
                );
            case 4:
                return (
                    <View style={tw`flex-1 p-5`}>
                        {/* Professon section */}
                        <ProfessionSection />


                    </View>
                );
            case 5:
                return (
                    <View style={tw`p-4`}>
                        {/* "What are you looking for?" Section */}
                        <Text style={tw`text-lg font-bold mb-4 text-gray-800`}>
                            What are you looking for?
                        </Text>
                        <View style={tw`flex-row flex-wrap mb-4`}>
                            {['Friendship', 'Hangout', 'Short Term Fun', 'Long Term Fun', 'Life Partner', "We'll See"].map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleLookingFor(option)}
                                    style={tw`m-1 p-2 rounded-md border ${selectedLookingFor.includes(option)
                                        ? 'bg-blue-500 border-blue-700'
                                        : 'border-gray-300'
                                        }`}
                                >
                                    <Text
                                        style={tw`${selectedLookingFor.includes(option)
                                            ? 'text-white'
                                            : 'text-gray-800'
                                            }`}
                                    >
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Hobbies Section */}
                        <Text style={tw`text-lg font-bold mb-4 text-gray-800`}>
                            What are your hobbies?
                        </Text>
                        <View style={tw`flex-row flex-wrap overflow-scroll`}>
                            {['Reading',
                                'Traveling',
                                'Cooking',
                                'Gaming',
                                'Music',
                                'Sports',
                                'Photography',
                                'Dancing',
                                'Writing',
                                'Drawing',
                                'Cycling',
                                'Gardening',
                                'Tech Innovation',
                                'Social Media',
                                'Camping',
                                'Rock Climbing',
                                'Public Speaking',
                                'Baking',
                                'Crafting',
                                'Watching Movies',
                                'Swimming',
                                'Pottery',
                                'Singing',
                                'Puzzles',
                                'Hiking',
                                'Yoga',
                                'Blogging',
                                'Fitness',
                                'Running',
                                'Stand-up Comedy',
                                'Coding/Programming',



                            ].map((hobby, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleHobbies(hobby)}
                                    style={tw`m-1 p-2 rounded-md border ${selectedHobbies.includes(hobby)
                                        ? 'bg-green-500 border-green-700'
                                        : 'border-gray-300'
                                        }`}
                                >
                                    <Text
                                        style={tw`${selectedHobbies.includes(hobby)
                                            ? 'text-white'
                                            : 'text-gray-800'
                                            }`}
                                    >
                                        {hobby}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                );
            case 6: // Profile Picture Upload
                return (
                    <View>

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
                            style={tw`bg-blue-500 p-3 rounded-md ${step === 1 ? 'ml-auto' : ''}`} // button
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
