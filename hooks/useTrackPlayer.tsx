import { TrackPlayerContext } from "@/providers/TrackPlayerContext";
import { useContext } from "react";


export const useTrackPlayer = () => {
    const context = useContext(TrackPlayerContext);
    if (!context) {
        throw new Error('useTrackPlayer must be used within a TrackPlayerProvider');
    }
    return context;
}

export const useActiveTrack = () => {
    const { track } = useTrackPlayer();
    return track;
}