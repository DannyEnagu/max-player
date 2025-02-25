import { unknownTrackImageUri } from '@/constants/images';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PlayPauseButton, SkipToNext } from './PlayerControls';
import { useTrackPlayer } from '@/hooks/useTrackPlayer';
import { useLastActiveTrack } from '@/hooks/useLastActiveTrack';
import MovingText from './MovingText';


const FloatingPlayer = () => {
    const { track } = useTrackPlayer();
    const lastActiveTrack = useLastActiveTrack();

    const currentTrack = track ?? lastActiveTrack;

    if (!currentTrack) return null;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="flex flex-row items-center bg-[#252525] rounded-xl shadow-2xl p-1"
        >
            <>
                <Image
                    source={{ uri: currentTrack?.artwork ?? unknownTrackImageUri }}
                    className="w-[40px] h-[40px] rounded-lg"
                />
                <View className="flex-1 overflow-hidden ml-3">
                    <MovingText
                        text={currentTrack?.title ?? ''}
                        className="text-white font-semibold text-lg pl-3"
                        animationThreshold={25}
                    />
                </View>
                <View className="flex flex-row items-center gap-x-5 mr-4 pl-4">
                    <PlayPauseButton
                        iconSize={24}
                    />
                    <SkipToNext iconSize={22} />
                </View>
            </>
        </TouchableOpacity>
    )
}

export default FloatingPlayer;