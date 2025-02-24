import Search from "@/components/shared/Search";
import { TrackList } from "@/components/TrackList";
import { useMemo } from "react";
import { SafeAreaView, Text } from "react-native";
import library from "@/assets/data/library.json";
import { useSearchParams } from "expo-router/build/hooks";
import { trackTitleFilter } from "@/helpers/filter";


export default function SongsScreen () {
    const searchQuery = useSearchParams().get('searchQuery');
    
    const filterTracks = useMemo(() => {
        if (!searchQuery) return library;

        return library.filter(trackTitleFilter(searchQuery));

    }, [searchQuery]);

    return (
        <SafeAreaView className="wrapper h-full px-5">
            <Text className="text-4xl font-bold text-white mt-8 mb-6">Songs</Text>
            <Search />
            <TrackList tracks={filterTracks} />
        </SafeAreaView>
    );
}
