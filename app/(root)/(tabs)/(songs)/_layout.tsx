import { TrackPlayerProvider } from "@/providers/TrackPlayerContext";
import { Stack } from "expo-router";
import { View } from "react-native";


const SongsScreenLayout = () => {
    return (
        <TrackPlayerProvider>
            <View className="wrapper">
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack>
            </View>
        </TrackPlayerProvider>
    );
}

export default SongsScreenLayout;