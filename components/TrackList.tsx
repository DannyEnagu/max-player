import { FlatList, FlatListProps, Image, Text, View } from "react-native";
import { TrackListItem } from "./TrackListItem";
import { Track } from "@/types/track";
import { unknownTrackImageUri } from "@/constants/images";
import { useTrackPlayer } from "@/hooks/useTrackPlayer";
export type TrackListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[];
};

export const TrackList = ({ tracks, ...flatListProps }: TrackListProps) => {
    const {
        loadTrack,
        trackPlayer,
        stopTrack,
        track: loadedTrack,
        togglePausePlay,
    } = useTrackPlayer();

    const handleTrackPress = async (track: Track) => {
        if (track.url === loadedTrack?.url) {
            togglePausePlay();
            return;
        };
        if (trackPlayer) {
            stopTrack();
        }
        loadTrack(track);
    };

    return (
        <FlatList
            data={tracks}
            keyExtractor={(item, index) => index.toString()}
            contentContainerClassName="pt-3 pb-32"
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListFooterComponent={tracks.length > 0 ? <ItemSeparatorComponent /> : null}
            ListEmptyComponent={<View>
                <Image source={{ uri: unknownTrackImageUri}} className="mt-10 mb-8 w-[150px] h-[150px] self-center opacity-30 rounded-xl" />
                <Text className="text-muted-500 text-center">No tracks found</Text>
            </View>}
            renderItem={
                ({item: track}) => <TrackListItem 
                    track={track}
                    onTrackPress={() => handleTrackPress(track)}
                />
            }
            contentInsetAdjustmentBehavior="automatic"
            {...flatListProps}
        />
    );
}

const ItemSeparatorComponent = () => {
    return (
        <View className="h-[1px] bg-muted-500 opacity-30 my-3 w-full" />
    );
}