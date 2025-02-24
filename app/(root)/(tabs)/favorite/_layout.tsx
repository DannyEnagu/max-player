import { StackScreenWithSearchBar } from "@/constants/layout";
import { Stack } from "expo-router";
import { View } from "react-native";


const FavoriteScreenLayout = () => {
    return (
        <View className="wrapper">
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: 'Favorites'
                }} />
            </Stack>
        </View>
    );
}

export default FavoriteScreenLayout;