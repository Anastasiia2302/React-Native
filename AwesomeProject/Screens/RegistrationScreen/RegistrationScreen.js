import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export default RegistrationScreen = () => {
  return (
    <View style={styles.form}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Регистрация</Text>
        <View>
          <TextInput style={styles.input} placeholder="Логин"></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
          ></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Пароль"
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.textSingUp}>Уже есть аккаунт? Войти</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    marginTop: 200,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    marginHorizontal: 16,
  },
  text: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    marginTop:92,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    marginTop: 16,
    padding: 16,
    color: "#BDBDBD",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    marginTop: 43,
    marginBottom: 16,
    height: 51,
    alignItems: "center",
  },
  textSingUp: {
   
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
  },
});
