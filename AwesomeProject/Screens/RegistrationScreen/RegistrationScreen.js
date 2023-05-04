import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export default RegistrationScreen = () => {
  return (
    <View style={styles.form}>
      <View style={styles.box}>
        <Image style={styles.avatar} />
        <View style={styles.boxAddAvatar}>
          <Image
            source={require("../../assets/add.svg")}
            style={styles.addAvatar}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Регистрация</Text>
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
  boxAddAvatar: {
    position: 'absolute',
    bottom: 14,
    right: -14,

    backgroundColor: '#FFFFFF',

    width: 25,
    height: 25,

    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    position: "absolute",
    top: -60,
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
