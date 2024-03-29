import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  ImageBackground,
} from "react-native";

import Avatar from "../../components/Avatar";

import styles from "./authStyle";
import { authRegister } from "../../Redux/auth/authOperations";
import { useDispatch } from "react-redux";
import KeyboardBox from "../../components/KeyboardBox";

const initialState = {
  nickname: "",
  email: "",
  password: "",
};

export default function Register() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [avatarImg, setAvatarImg] = useState("");


  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (avatarImg === "") {
      Toast.show({
        type: "error",
        text1: "Avatar error:",
        text2: "Avatar должен быть выбран",
      });
      console.log("handleSubmit");
      return;
    }

    if (state.email === "" || state.password === "" || state.nickname === "") {
      Toast.show({
        type: "error",
        text1: "Form error:",
        text2: "Email, Password та Login должны быть заполнены.",
      });
      return;
    }
    dispatch(authRegister({ ...state, photoURL: avatarImg }));
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
          <View style={styles.containerAvatar}>
            <Avatar avatarImg={avatarImg} setAvatarImg={setAvatarImg} />
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput
            style={{ ...styles.input, marginBottom: 16 }}
            placeholder="Логін"
            onFocus={() => {
              setisShowKeyboard(true);
            }}
            value={state.nickname}
            onChangeText={(val) =>
              setState((prevState) => ({ ...prevState, nickname: val }))
            }
          />
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
                <Text style={styles.btnText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>
                 Уже есть аккаунт?<Text style={styles.text}> Войти</Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
    </KeyboardBox>
  );
}
