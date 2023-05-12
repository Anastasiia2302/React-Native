import {
  StyleSheet,
  View,
  ImageBackground,
  
} from "react-native";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Image/PhotoBG.jpg")}
        style={styles.imageBG}
      >
       
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        
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
