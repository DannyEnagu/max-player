import { unknownTrackImageUri } from "@/constants/images";
import { useActiveTrack, useTrackPlayer } from "@/hooks/useTrackPlayer";
import { Track } from "@/types/track";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { TouchableHighlight, View, Text, Image } from "react-native";
import { BarIndicator } from 'react-native-indicators';

type TrackListItemProps = {
    track: Track;
    onTrackPress: (track: Track) => void;
};

export const TrackListItem = ({ track, onTrackPress: handleTrackPress }: TrackListItemProps) => {
    const { isPlaying } = useTrackPlayer();
    const isActiveTrack = useActiveTrack()?.url === track.url;

    return (
        <TouchableHighlight onPress={() => handleTrackPress(track)}>
            <View className="flex flex-row items-center pr-5 gap-x-3">
                <View className="rounded-lg overflow-hidden">
                    <Image
                        source={{ uri: track.artwork ?? unknownTrackImageUri }}
                        className={`rounded-lg w-[50px] h-[50px] ${isActiveTrack ? 'opacity-60' : 'opacity-100'}`}
                    />
                    {isActiveTrack && (isPlaying
                        ? (<BarIndicator
                                color="white"
                                className="absolute top-[18px] left-5 h-4 w-4"
                                size={16}
                                count={5}
                            />)
                        : (<Ionicons
                                name="play"
                                size={24}
                                color="white"
                                className="absolute top-[14px] left-[14px]"
                            />)
                    )}
                </View>
                <View className="flex-1">
                    <Text className={`text-sm font-semibold max-w-[90%] ${isActiveTrack ? 'text-primary-500' : 'text-white'}`}>{track.title}</Text>
                    {track.artist && <Text className="text-sm text-muted-500 font-semibold mt-1">{track.artist}</Text>}
                </View>
                <Entypo name="dots-three-horizontal" size={18} color="white" />
            </View>
        </TouchableHighlight>
    );
}