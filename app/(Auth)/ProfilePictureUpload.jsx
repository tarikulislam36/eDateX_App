import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';

const ProfilePictureUpload = () => {
    const [images, setImages] = useState(Array(6).fill(null)); // Initialize 6 empty slots

    useEffect(() => {
        const requestPermissions = async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'We need camera roll permissions to make this work!');
            }
        };
        requestPermissions();
    }, []);

    const pickImageAndCrop = async (index) => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled && result.assets.length > 0) {
                const updatedImages = [...images];
                updatedImages[index] = result.assets[0].uri;
                setImages(updatedImages);
            }
        } catch (error) {
            console.error('Error selecting image:', error);
        }
    };

    const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages[index] = null; // Remove the image
        setImages(updatedImages);

        // Reorganize images (move empty slots to the end)
        const reorganizedImages = updatedImages.filter((img) => img).concat(Array(6).fill(null)).slice(0, 6);
        setImages(reorganizedImages);
    };

    // Count uploaded images
    const uploadedCount = images.filter((img) => img !== null).length;
    const isFinishEnabled = uploadedCount >= 3; // Enable button if at least 3 images uploaded

    return (
        <View style={tw`flex bg-white p-5`}>
            <Text style={tw`text-xl font-bold text-center mb-5`}>Upload Your Profile Pictures</Text>

            {/* Image Grid */}
            <View style={tw`flex-row flex-wrap justify-center`}>
                {images.map((image, index) => (
                    <View key={index} style={tw`w-1/3 p-2`}>
                        {image ? (
                            <View style={tw`relative`}>
                                <Image source={{ uri: image }} style={tw`w-full h-24 rounded-lg`} />
                                <TouchableOpacity
                                    style={tw`absolute -top-2 -right-2 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center`}
                                    onPress={() => removeImage(index)}
                                >
                                    <Text style={tw`text-white font-bold`}>✕</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={tw`w-full h-24 bg-gray-200 border border-gray-400 rounded-lg flex items-center justify-center`}
                                onPress={() => pickImageAndCrop(index)}
                            >
                                <Text style={tw`text-gray-600 text-3xl`}>+</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </View>

            {/* Finish Button */}
            <TouchableOpacity
                style={tw`mt-6 p-3 rounded-lg ${isFinishEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                disabled={!isFinishEnabled}
            >
                <Text style={tw`text-white text-center font-bold text-lg`}>
                    Finish
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfilePictureUpload;
