import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Hub() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Hub!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});
