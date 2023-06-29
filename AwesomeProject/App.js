import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/Image/PhotoBG.jpg")}
          style={styles.imageBG}
        ></ImageBackground>

        <RegistrationScreen
          isShowKeyboard={isShowKeyboard}
          setIsShowKeyboard={setIsShowKeyboard}
        />
        {/* <LoginScreen 
        isShowKeyboard={isShowKeyboard}
        setIsShowKeyboard={setIsShowKeyboard}/> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageBG: {
    resizeMode: "cover",
    position: "absolute",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
});
