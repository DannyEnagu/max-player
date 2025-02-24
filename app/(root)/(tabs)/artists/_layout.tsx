import { StackScreenWithSearchBar } from "@/constants/layout";
import { Stack } from "expo-router";
import { View } from "react-native";


const ArtistsScreenLayout = () => {
    return (
        <View className="wrapper">
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: 'Artists'
                }} />
                {/* <Stack.Screen name="song-detail" /> */}
            </Stack>
        </View>
    );
}

export default ArtistsScreenLayout;