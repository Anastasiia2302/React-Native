import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import LoginScreen from "./Screens/LoginScreen/Login";
import RegistrationScreen from "./Screens/RegistrationScreen/Registration";
import HomeScreen from "./Screens/HomeScreen/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <NavigationContainer>
    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/Image/PhotoBG.jpg")}
            style={styles.imageBG}
          ></ImageBackground>
           
          {/* initialRouteName="Home" */}
          <MainStack.Navigator > 
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              isShowKeyboard={isShowKeyboard}
              setIsShowKeyboard={setIsShowKeyboard}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              isShowKeyboard={isShowKeyboard}
              setIsShowKeyboard={setIsShowKeyboard}
            />
             <MainStack.Screen name="Home" component={HomeScreen} />
             </MainStack.Navigator>
        </View>
       
      </TouchableWithoutFeedback>
      
    </NavigationContainer>
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
