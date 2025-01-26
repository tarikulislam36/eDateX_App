import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import tw from 'twrnc';

const ProfessionSection = () => {
    const [selectedProfession, setSelectedProfession] = useState(null);

    const professions = [
        { id: 1, name: 'Student', image: 'https://via.placeholder.com/150/87CEEB/FFFFFF?text=Student' },
        { id: 2, name: 'Working Professional', image: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Professional' },
        { id: 3, name: 'Doctor', image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Doctor' },
        { id: 4, name: 'Entrepreneur', image: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=Entrepreneur' },
        { id: 5, name: 'Unemployed', image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Unemployed' },
    ];


    const handleSelectProfession = (profession) => {
        setSelectedProfession(profession.id);
    };

    return (
        <View style={tw`flex-1 p-5`}>
            <Text style={tw`text-lg mb-3 font-semibold`}>Select Your Profession</Text>

            <FlatList
                data={professions}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={tw`justify-between mb-4`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleSelectProfession(item)}
                        style={tw`w-[48%] border p-3 rounded-lg ${selectedProfession === item.id ? 'border-green-500' : 'border-gray-300'
                            }`}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={tw`w-full h-20 mb-3 rounded-lg`}
                            resizeMode="cover"
                        />
                        <Text style={tw`text-center text-base font-medium`}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {selectedProfession && (
                <View style={tw`mt-5`}>
                    <Text style={tw`text-green-600 font-bold text-center`}>
                        You selected: {professions.find((prof) => prof.id === selectedProfession)?.name}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default ProfessionSection;
