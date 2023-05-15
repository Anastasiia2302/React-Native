import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default LoginScreen = () => {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <View style={styles.form}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Войти</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            placeholderTextColor="#BDBDBD"
          ></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Войти</Text>
        </TouchableOpacity>
        <Text style={styles.textSingUp}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  form: {
    marginTop: 320,
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    marginHorizontal: 16,
   
    
  },

  title: {
    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    marginBottom: 16,
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
  textSingUp: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
  },
});
