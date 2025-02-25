import React, { useEffect } from 'react';
import Animated, { cancelAnimation, Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';


export type MovingTextProps = {
  text: string;
  animationThreshold: number;
  className?: string;
}

const MovingText = ({text, animationThreshold, className}: MovingTextProps) => {
    const translateX = useSharedValue(0);
    const shouldAnimate = text.length > animationThreshold;

    const textWidth = text.length * 3;

    useEffect(() => {
        if (!shouldAnimate) return;
        translateX.value = withDelay(
            1000,
            withRepeat(
                withTiming(-textWidth,
                    {
                        duration: 300 * text.length,
                        easing: Easing.linear,
                    }
                ),
            -1,
            true)
        );

        return () => {
            cancelAnimation(translateX);
            translateX.value = 0;
        }
    }
    , [text, shouldAnimate, textWidth, translateX, animationThreshold]);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

  return (<Animated.Text
        numberOfLines={1}
        className={`${className ?? ''}`}
        style={[animatedStyle, shouldAnimate && {
            width: 9999, // Prevent the ellipsis from showing
            paddingLeft: 16, // Add padding to the left to prevent the text from jumping
        }]}
    >
        {text}
    </Animated.Text>
  )
}

export default MovingText;