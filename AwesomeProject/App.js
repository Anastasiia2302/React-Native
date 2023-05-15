import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  
} from "react-native";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <>
      <ImageBackground
        source={require("./assets/Image/PhotoBG.jpg")}
        style={styles.imageBG}
      ></ImageBackground>
        <View style={styles.container}>
       
          <RegistrationScreen />
          {/* <LoginScreen /> */}
          </View>
      
      </>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
  
  },
  imageBG: {
    resizeMode: 'cover',
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
  },
});
