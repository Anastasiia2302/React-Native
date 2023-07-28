import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const DefaultScreenPosts = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);

  return (
    <>
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
        <View>
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10, marginTop: 10, marginLeft: 15 }}>
                <Image
                  source={{ uri: item.photo }}
                  style={{ borderRadius: 8, width: 343, height: 240 }}
                />
                <Text style={styles.text}>{item.title}</Text>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Comments")}
                  >
                    <Image
                      style={styles.iconComment}
                      source={require("../../../assets/Image/message-circle.png")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity  onPress={() =>
                      navigation.navigate("Map", {
                        latitude: item.latitude, 
                        longitude: item.longitude, 
                      })
                    }>
                    <Image
                      style={styles.iconMap}
                      source={require("../../../assets/Image/map-pin.png")}
                    />
                  </TouchableOpacity>
                  <Text style={styles.text}>{item.location}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </>
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
  iconComment: {
    marginRight: 150,
  },
  iconMap: {
    marginRight: 5,
  },
  text: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 500,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DefaultScreenPosts;
