import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Публикации</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            style={styles.iconLogOut}
            source={require("../../../assets/Image/log-out.png")}
          />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: "#212121",
    padding: 20,
  },
  title: {
    color: "#212121",
    fontSize: 20,
    fontWeight: 500,
    marginTop: 60,
    textAlign: "center",
  },
  iconLogOut: {
    position: "absolute",
    bottom: 0,
    right: 20,
  },
  
});

export default Home;
