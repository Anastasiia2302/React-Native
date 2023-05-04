import { StyleSheet,  View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Image/PhotoBG.jpg")}
        style={styles.imageBG}
      >

        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

