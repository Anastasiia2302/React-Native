import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = ({ navigation, route }) => {
  const latitude = route.params?.latitude || 0;
  const longitude = route.params?.longitude || 0;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Карта</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("DefaultScreenPosts")}
        >
          <Image
            style={styles.iconArrow}
            source={require("../../../assets/Image/arrow-left.png")}
          />
        </TouchableOpacity>
      </View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
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
  iconArrow: {
    position: "absolute",
    bottom: 0,
    left: 20,
  },
});

export default Map;
