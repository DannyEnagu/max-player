import { Track } from "@/types/track";
import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { Audio } from 'expo-av';

type AudioPlayer = Audio.Sound;

interface TrackPlayerContextValue {
    track: Track | null;
    trackPlayer: AudioPlayer | null;
    isPlaying: boolean;
    loadTrack: (track: Track) => void;
    stopTrack: () => void;
    skipToNext: () => void;
    skipToPrevious: () => void;
    togglePausePlay: () => void;
}


export const TrackPlayerContext = createContext<TrackPlayerContextValue | null>(null);

export const TrackPlayerProvider = ({ children } : {
    children: React.ReactNode;
}) => {
    const [track, setTrack] = useState<Track | null>(null);
    const [trackPlayer, setTrackPlayer] = useState<AudioPlayer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const player = useRef<AudioPlayer | null>(null);

    const loadTrack = async (track: Track) => {
        // Load a track
        const { sound } = await Audio.Sound.createAsync({ uri: track.url });
        sound.playAsync();
        setTrackPlayer(sound);
        setTrack(track);
        setIsPlaying(true);
        player.current = sound;


        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish && !status.isLooping) {
                // Track has finished playing
                setIsPlaying(false);
            }
        });
    }

    // const unLoadTrack = useCallback(() => {
    //     // Unload the current track
    //     if (player.current) {
    //         player.current = null;
    //         setTrackPlayer(null);
    //         setTrack(null);
    //         setTrackPlayer(null);
    //         setIsPlaying(false);
    //     }
    // }, []);

    const togglePausePlay = async () => {
        // Toggle between pause and play
        if (isPlaying) {
            await trackPlayer?.pauseAsync();
            setIsPlaying(!isPlaying);
        } else {
            // Check if the track has finished playing
            trackPlayer?.getStatusAsync().then((status) => {
                if (status.isLoaded && status.shouldPlay) {
                    // Replay finished track
                    trackPlayer?.replayAsync();
                    setIsPlaying(true);
                    return;
                }
            });
            await trackPlayer?.playAsync();
            setIsPlaying(!isPlaying);
        }
    }

    const stopTrack = async () => {
        // Stop the current track
        await trackPlayer?.stopAsync();
        await trackPlayer?.unloadAsync();
        setTrackPlayer(null);
        setTrack(null);
        setIsPlaying(false);
    }

    const skipToNext = () => {
        // Skip to the next track

    }
    const skipToPrevious = () => {
        // Skip to the previous track
    }

    const value = {
        trackPlayer,
        isPlaying,
        track,
        skipToNext,
        skipToPrevious,
        togglePausePlay,
        stopTrack,
        loadTrack,
    }

    useEffect(() => {
        // Unload on unmount
        return () => {
            if (player.current) {
                player.current.unloadAsync();
            }
        }
    }, []);

    return (
        <TrackPlayerContext.Provider value={value}>
            {children}
        </TrackPlayerContext.Provider>
    );
}