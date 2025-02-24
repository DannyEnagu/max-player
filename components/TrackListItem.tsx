import { unknownTrackImageUri } from "@/constants/images";
import { Track } from "@/types/track";
import { Entypo } from "@expo/vector-icons";
import { TouchableHighlight, View, Text, Image } from "react-native";

type TrackListItemProps = {
    track: Track;
    onTrackPress: (track: Track) => void;
};

export const TrackListItem = ({ track, onTrackPress: handleTrackPress }: TrackListItemProps) => {
    const isActiveTrack = false;

    return (
        <TouchableHighlight onPress={() => handleTrackPress(track)}>
            <View className="flex flex-row items-center pr-5 gap-x-3">
                <View className="rounded-lg overflow-hidden">
                    <Image
                        source={{ uri: track.artwork ?? unknownTrackImageUri }}
                        className={`rounded-lg w-[50px] h-[50px] ${isActiveTrack ? 'opacity-60' : 'opacity-100'}`}
                    />
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