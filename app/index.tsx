import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  const styles = StyleSheet.create({
    fullScreen: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
  });

  const gradientStyles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const viewStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <SafeAreaProvider>
      <View style={viewStyles.container}>
        <LinearGradient
          colors={["#04b3f8", "rgb(182, 221, 236)"]}
          start={[0, 0]}
          end={[1, 1]}
          style={gradientStyles.container}
        >
          <Text>Edit app/index.tsx to edit this screen.</Text>
          <Link
            href="/about"
            style={{
              color: "white",
              backgroundColor: "black",
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            About
          </Link>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
}
