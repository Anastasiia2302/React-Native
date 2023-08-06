import { useState } from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./Screens/LoginScreen/Login";
import RegistrationScreen from "./Screens/RegistrationScreen/Registration";
import HomeScreen from "./Screens/PostsScreen/HomeScreen/Home";
import CreatePostsScreen from "./Screens/PostsScreen/CreatePostsScreen/CreatePosts";

import ProfileScreen from "./Screens/PostsScreen/ProfileScreen/Profile";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
          isShowKeyboard={isShowKeyboard}
          setIsShowKeyboard={setIsShowKeyboard}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
          isShowKeyboard={isShowKeyboard}
          setIsShowKeyboard={setIsShowKeyboard}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("./assets/Image/grid.png")} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <MainTab.Screen
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("./assets/Image/new.png")} />
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("./assets/Image/user.png")} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
