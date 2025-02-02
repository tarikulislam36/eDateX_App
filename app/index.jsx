import React from "react";
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    interpolate,
} from "react-native-reanimated";
import tw from 'twrnc';
import { router, Link } from 'expo-router';
import App from './(Auth)/App';

export default function index() {
    const animationValue = useSharedValue(0);

    React.useEffect(() => {
        // Start infinite horizontal wave animation
        animationValue.value = withRepeat(
            withTiming(1, { duration: 600006000 }), // Animation duration
            -1, // Repeat forever
            true // Reverse direction
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        // Horizontal wave-like movement
        const translateX = interpolate(
            animationValue.value,
            [0, 1],
            [-200, 200] // Move left and right
        );

        return {
            transform: [{ translateX }],
        };
    });

    return (

        <>
            <View >
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
                <Animated.View style={[styles.animatedContainer, animatedStyle]}>
                    <LinearGradient //FFFFFF
                        colors={["#1adae8", "#FFFFFF"]} // Left-to-right gradient (white to blue)
                        style={styles.gradient}
                        start={{ x: 0.5, y: 0.1 }} // Adjust gradient start position
                        end={{ x: 0.5, y: 0.9 }} // Adjust gradient end position
                    />


                </Animated.View>

                <View style={tw`flex-1 w-full justify-center items-center absolute top-22`}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
                    <Image
                        source={require('./img/cy-removebg-preview.png')}
                        style={tw`w-90 h-85 mb-5`} // Adjust size for logo
                    />

                    <TouchableOpacity onPress={() => router.push('App')}>
                        <LinearGradient
                            colors={['#aed3f5', '#1adae8']}
                            style={tw`rounded-full px-25 py-4 relative top-35 bottom--14 mb-2`} // Adjust padding for button
                        >
                            <Text style={tw`text-white font-bold text-lg`}>Create Account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Link href='/(tabs)'> Go to Profile</Link>
                    <TouchableOpacity onPress={() => router.push('(tabs)')}>
                        <LinearGradient
                            colors={['#ebe2e1', '#ADD8FF']}
                            style={tw`rounded-full px-35 py-4 relative top-35 bottom--14`} // Adjust padding for button
                        >
                            <Text style={tw`text-white font-bold text-lg`}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* Foter  Policy alert*/}
                    <View style={tw`items-center justify-center mt-5 relative top-35 bottom--14`}>
                        <Text style={tw`text-center p-3 font-bold text-slate-500`}> By signing up, you agree to our Terms of Service and Privacy Policy</Text>
                    </View>


                </View>

            </View >
        </>
    );
}

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
