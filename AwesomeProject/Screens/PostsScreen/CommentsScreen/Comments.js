import {  View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const Comments = ({navigation}) => {

    return(
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Коментарии</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.iconArrow}
              source={require("../../../assets/Image/arrow-left.png")}
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
    
  });


export default Comments;