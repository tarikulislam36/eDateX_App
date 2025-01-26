import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

const SelectInstitute = ({ onInstituteSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [institutes, setInstitutes] = useState([]);
    const [filteredInstitutes, setFilteredInstitutes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch institutes from API
        const fetchInstitutes = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://universities.hipolabs.com/search');
                const data = await response.json();
                setInstitutes(data);
                setFilteredInstitutes(data);
            } catch (error) {
                console.error('Error fetching institutes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstitutes();
    }, []);

    const handleSearch = (text) => {
        setSearchTerm(text);
        const filtered = institutes.filter((institute) =>
            institute.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredInstitutes(filtered);
    };

    const handleInstituteSelect = (institute) => {
        onInstituteSelect(institute);
    };

    return (
        <View style={tw`flex-1 p-5`}>
            <Text style={tw`text-lg mb-3`}>Select Your Institute</Text>
            <TextInput
                style={tw`border p-3 rounded-md mb-5 h-35`}
                placeholder="Search for your institute..."
                value={searchTerm}
                onChangeText={handleSearch}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#c9041e" />
            ) : (
                <FlatList
                    data={filteredInstitutes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tw`p-3 border-b`}
                            onPress={() => handleInstituteSelect(item)}
                        >
                            <Text style={tw`text-base text-lg`}>{item.name}</Text>
                            <Text style={tw`text-lg text-green-900`}>{item.country}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

export default SelectInstitute;
