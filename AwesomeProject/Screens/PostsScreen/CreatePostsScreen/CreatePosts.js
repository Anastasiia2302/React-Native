import {  View, StyleSheet, Text,  Image, TouchableOpacity } from "react-native";

const CreatePosts = ({navigation}) => {

    return(
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Создать публикацию</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.iconArrow}
              source={require("../../../assets/Image/arrow-left.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity >
            <Image
              style={styles.iconCamera}
              source={require("../../../assets/Image/camera.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity >
            <Image
              style={styles.iconTrash}
              source={require("../../../assets/Image/trash.png")}
            />
          </TouchableOpacity>
        </View>
      </View>)
}

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
    iconArrow: {
      position: "absolute",
      bottom: 0,
      left: 20,
    },
    iconCamera: {
        position: "absolute",
        top: 100,
        left: 150
    },
    iconTrash: {
        position: "absolute",
        top: 600,
        left: 150
    },
  });


export default CreatePosts;