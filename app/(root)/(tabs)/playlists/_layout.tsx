import { StackScreenWithSearchBar } from "@/constants/layout";
import { Stack } from "expo-router";
import { View } from "react-native";


const PlaylistsScreenLayout = () => {
    return (
        <View className="wrapper">
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: 'Playlists'
                }} />
            </Stack>
        </View>
    );
}

export default PlaylistsScreenLayout;