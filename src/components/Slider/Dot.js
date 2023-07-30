import { StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
    useAnimatedStyle,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';

const Dot = ({ x, index, size }) => {
    const animatedDotStyle = useAnimatedStyle(() => {
        const widthAnimation = interpolate(
            x.value,
            [(index - 1) * size, index * size, (index + 1) * size],
            [10, 20, 10],
            Extrapolate.CLAMP,
        );
        const opacityAnimation = interpolate(
            x.value,
            [(index - 1) * size, index * size, (index + 1) * size],
            [0.2, 1, 0.2],
            Extrapolate.CLAMP,
        );
        return {
            width: 10,
            opacity: opacityAnimation,
            backgroundColor: 'red'
        };
    });
    return <Animated.View style={[styles.dots, animatedDotStyle]} />;
};

export default Dot;

const styles = StyleSheet.create({
    dots: {
        height: 10,
        backgroundColor: 'orange',
        marginHorizontal: 10,
        borderRadius: 5,
    },
});