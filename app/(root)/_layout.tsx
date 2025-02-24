import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import "../../assets/styles/global.css";
import { Stack } from "expo-router";



export default function RootLayout() {
	return (<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}

const RootNavigation = () => {
	return (<Stack>
		<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
	</Stack>);
}
