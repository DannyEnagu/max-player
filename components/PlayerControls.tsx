
import { useTrackPlayer } from '@/hooks/useTrackPlayer';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react'
import { View, TouchableOpacity } from 'react-native'

type PlayerControlsProps = {
    className?: string;
}

type PlayerButtonProps = {
    iconSize?: number;
    className?: string;
}

export const PlayPauseButton = ({ className, iconSize }: PlayerButtonProps) => {
    const { isPlaying, togglePausePlay } = useTrackPlayer();

    return (
        <View className={`${className}`} style={{ height: iconSize}}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => togglePausePlay()}
            >
                <FontAwesome6
                    name={isPlaying ? "pause" : 'play'}
                    size={iconSize}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    )
}

export const SkipToNext = ({ iconSize=30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {}}
        >
            <FontAwesome6
                name="forward"
                size={iconSize}
                color="white"
            />
        </TouchableOpacity>
    )
}

export const SkipToPrevious = ({ iconSize=30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {}}
        >
            <FontAwesome6
                name="backward"
                size={iconSize}
                color="white"
            />
        </TouchableOpacity>
    )
}