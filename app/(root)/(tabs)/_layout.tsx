import FloatingPlayer from "@/components/FloatingPlayer";
import { colors, fontSizes } from "@/constants/tokens";
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

const TabsNavigation = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: fontSizes.xs,
                    fontWeight: "500",
                },
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarBackground: () => <BlurView
                    intensity={95}
                    tint="systemThickMaterialDark"
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        overflow: "hidden",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                />,
            }}>
                <Tabs.Screen name="favorite" options={{
                    title: "Favorites",
                    tabBarIcon: ({color}) =>  <Ionicons name="heart" size={20} color={color} />,
                }} />
                <Tabs.Screen name="playlists" options={{
                    title: "Playlists",
                    tabBarIcon: ({color}) =>  <MaterialCommunityIcons  name="playlist-play" size={28} color={color} />,
                }} />
                <Tabs.Screen name="(songs)" options={{
                    title: "Songs",
                    tabBarIcon: ({color}) =>  <Ionicons  name="musical-notes-sharp" size={24} color={color} />,
                }} />
                <Tabs.Screen name="artists" options={{
                    title: "Artists",
                    tabBarIcon: ({color}) =>  <FontAwesome6  name="users-line" size={20} color={color} />,
                }} />
            </Tabs>
            <View className="absolute bottom-[60px] left-2 right-2">
                <FloatingPlayer track={{
                    id: "1",
                    artist: "Some Artist",
                    album: "Some Album",
                    duration: 0,
                    url: "",
                    title: "Some Track",
                }} />
            </View>
        </>
    );
}

export default TabsNavigation;