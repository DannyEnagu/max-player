import { Stack } from "expo-router";
import { View } from "react-native";


const SongsScreenLayout = () => {
    return (
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
    );
}

export default SongsScreenLayout;