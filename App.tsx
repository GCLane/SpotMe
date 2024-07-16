import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { User } from "./app/entities/User";
import AccountContext from "./app/auth/account";

export default function App() {
	const [user, setUser] = useState<User | undefined>(undefined);

	const signIn = () => {
		if (!user) {
			setUser({ email: "grantlane.glane@gmail.com", password: "12345" });
		} else {
			setUser(undefined);
		}
	};

	return (
		<AccountContext.Provider value={{ user: user, setUser: setUser }}>
			<View
				style={[
					styles.container,
					{ backgroundColor: user ? "black" : "white" },
				]}
			>
				<Pressable
					onPress={signIn}
					style={({ pressed }) => [
						styles.button,
						{ opacity: pressed ? 0.5 : 1 },
					]}
				>
					<Text>Press Here</Text>
				</Pressable>
			</View>
		</AccountContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "red",
		height: 40,
		justifyContent: "center",
		width: 250,
	},
});
