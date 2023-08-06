import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import {authSignUpUser} from "../../redux/auth/authOperations"

const initialState = {
  login: "",
  email: "",
  password: "",
};

const Registration = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/Image/PhotoBG.jpg")}
          style={styles.imageBG}
        ></ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 40 }}
            >
              <View style={styles.box}>
                <Image style={styles.avatar} />
                <View style={styles.boxAddAvatar}>
                  <Image
                    source={require("../../assets/Image/plus.png")}
                    
                  />
                </View>
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.title}>Регистрация</Text>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Логин"
                    placeholderTextColor="#BDBDBD"
                    value={state.login}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  ></TextInput>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Адрес электронной почты"
                    placeholderTextColor="#BDBDBD"
                    value={state.email}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  ></TextInput>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    value={state.password}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  ></TextInput>
                </View>

                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                >
                  <Text style={styles.textBtn}>Зарегистрироваться</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.textSingIn}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
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
  form: {
    marginTop: 260,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    marginHorizontal: 16,
  },
  boxAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -14,
    backgroundColor: "#FFFFFF",
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    position: "absolute",
    top: -60,
    left: 120,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  title: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    marginTop: 92,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    marginTop: 16,
    padding: 16,
    color: "#212121",
  },
  button: {
    backgroundColor: "#FF6C00",

    borderRadius: 100,

    marginTop: 43,
    marginBottom: 16,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFFFFF",
  },
  textSingIn: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
  },
  
});

export default Registration;
