import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Index() {

  const styles = StyleSheet.create({ fullScreen: { width: Dimensions.get('window').width, height: Dimensions.get('window').height, }, });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <LinearGradient
      colors={ [ '#04b3f8', 'rgb(182, 221, 236)']}

      start={[0, 0]}
      end={[1, 1]}
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>

      </LinearGradient>
      
      
    </View>
  );
}
