import { Track } from "@/types/track";
import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { AudioPlayer } from 'expo-audio';

interface TrackPlayerContextValue {
    track: Track | null;
    trackPlayer: AudioPlayer | null;
    loadTrack: (track: Track) => void;
    skipToNext: () => void;
    skipToPrevious: () => void;
}


export const TrackPlayerContext = createContext<TrackPlayerContextValue | null>(null);

export const TrackPlayerProvider = ({ children } : {
    children: React.ReactNode;
}) => {
    const [track, setTrack] = useState<Track | null>(null);
    const [trackPlayer, setTrackPlayer] = useState<AudioPlayer | null>(null);
    const player = useRef<AudioPlayer | null>(null);

    const loadTrack = (track: Track) => {
        // Load a track
        const newPlayer = new AudioPlayer({uri: track.url}, 0);
        setTrackPlayer(newPlayer);
        setTrack(track);
        player.current = newPlayer;
    }

    const unLoadTrack = useCallback(() => {
        // Unload the current track
        if (player.current) {
            player.current = null;
            setTrackPlayer(null);
            setTrack(null);
            setTrackPlayer(null);
        }
    }, []);

    const skipToNext = () => {
        // Skip to the next track
    }

    const skipToPrevious = () => {
        // Skip to the previous track
    }

    const value = {
        trackPlayer,
        track,
        skipToNext,
        skipToPrevious,
        loadTrack,
    }

    useEffect(() => {
        // Unload on unmount
        return () => {
            unLoadTrack();
        }
    }, [unLoadTrack]);

    return (
        <TrackPlayerContext.Provider value={value}>
            {children}
        </TrackPlayerContext.Provider>
    );
}