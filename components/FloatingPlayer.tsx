import { unknownTrackImageUri } from '@/constants/images';
import { Track } from '@/types/track';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PlayPauseButton, SkipToNext } from './PlayerControls';

interface FloatingPlayerProps {
    track: Track;
}

const FloatingPlayer = ({ track } : FloatingPlayerProps) => {
    const [isPlaying, setIsPlaying] = React.useState(true);

    if (!isPlaying) return null;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="flex flex-row items-center bg-[#252525] rounded-xl shadow-2xl p-1"
        >
            <>
                <Image
                    source={{ uri: track.artwork ?? unknownTrackImageUri }}
                    className="w-[40px] h-[40px] rounded-lg"
                />
                <View className="flex-1 overflow-hidden ml-3">
                    <Text className="text-white font-semibold text-lg pl-3">
                        {track.title}
                    </Text>
                </View>
                <View className="flex flex-row items-center gap-x-5 mr-4 pl-4">
                    <PlayPauseButton
                        // isPlaying={isPlaying}
                        // onPress={() => setIsPlaying(!isPlaying)}
                        iconSize={24}
                    />
                    <SkipToNext iconSize={22} />
                </View>
            </>
        </TouchableOpacity>
    )
}

export default FloatingPlayer;