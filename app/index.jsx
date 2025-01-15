import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    interpolate,
} from "react-native-reanimated";
import tw from 'twrnc';

export default function index() {
    const animationValue = useSharedValue(0);

    React.useEffect(() => {
        // Start infinite horizontal wave animation
        animationValue.value = withRepeat(
            withTiming(1, { duration: 6000 }), // Animation duration
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
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Animated.View style={[styles.animatedContainer, animatedStyle]}>
                <LinearGradient
                    colors={["#FFFFFF", "#ADD8FF"]} // Left-to-right gradient (white to blue)
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }} // Horizontal gradient
                />


            </Animated.View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black", // Fallback background
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
