import { useEffect, useRef } from "react";
import { useTrackPlayer } from "./useTrackPlayer";
import { Track } from "@/types/track";

export const useLastActiveTrack = () => {
    // Get the last active track
    const { track } = useTrackPlayer();
    const lastTrack = useRef<Track | null>(null);
    useEffect(() => {
        if (!track) return;
        lastTrack.current = track;
    }, [track]);

    return lastTrack.current;
}