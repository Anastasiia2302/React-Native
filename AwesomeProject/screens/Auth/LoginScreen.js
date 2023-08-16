import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { authLogin } from "../../Redux/auth/authOperations";


import styles from "./authStyle";
import { ImageBackground } from "react-native";
import KeyboardBox from "../../components/KeyboardBox";


const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (state.email === "" || state.password === "") {
      Toast.show({
        type: "error",
        text1: "Form error:",
        text2: "Email, Password должны быть заполнены.",
      });
      return;
    }
    dispatch(authLogin(state));
    setState(initialState);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setisShowKeyboard(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardBox keyboardHide={keyboardHide}>
      <ImageBackground
        source={require("../../assets/Image/PhotoBG.png")}
        style={styles.backgroundImage}
      >
        <View
          style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 78 }}
        >
          <Text style={styles.title}>Войти</Text>

          <TextInput
            style={{ ...styles.input, marginBottom: 16 }}
            autoComplete="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Адрес электронной почты"
            onFocus={() => {
              setisShowKeyboard(true);
            }}
            value={state.email}
            onChangeText={(val) =>
              setState((prevState) => ({ ...prevState, email: val }))
            }
          />

          <View style={{ position: "relative", width: "100%" }}>
            <TextInput
              style={{
                ...styles.input,
                marginBottom: isShowKeyboard ? 0 : 43,
              }}
              secureTextEntry={!isPasswordVisible}
              placeholder="Пароль"
              onFocus={() => {
                setisShowKeyboard(true);
              }}
              value={state.password}
              onChangeText={(val) =>
                setState((prevState) => ({ ...prevState, password: val }))
              }
            />

            <View style={{ position: "absolute", top: 0, right: 0 }}>
              <TouchableOpacity
                style={{
                  ...styles.btnInput,
                  marginVertical: 16,
                  marginRight: 16,
                }}
                onPress={togglePasswordVisibility}
              >
                <Text style={styles.btnInputText}>
                  {isPasswordVisible ? "Скрыть" : "Показать"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {!isShowKeyboard && (
            <>
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.text}>
                  Нет аккаунта?<Text style={styles.text}> Зарегистрироваться</Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
    </KeyboardBox>
  );
}
