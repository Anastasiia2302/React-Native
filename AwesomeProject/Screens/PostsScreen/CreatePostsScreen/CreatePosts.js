import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

const initialState = {
  photo: "",
  title: "",
  location: "",
};

const CreatePosts = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [locationStatus, setLocationStatus] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const locationStatus = await Location.requestForegroundPermissionsAsync();

      setIsCameraReady(cameraStatus.status === "granted");
      setLocationStatus(locationStatus);
    })();
  }, []);

  useEffect(() => {
    const { title, location, photo } = state;
    setAllFieldsFilled(title !== "" && location !== "" && photo !== null);
  }, [state]);

  const takePhoto = async () => {
    if (isCameraReady) {
      const cameraPhoto = await camera.takePictureAsync();
      setPhoto(cameraPhoto.uri);

      if (locationStatus.status === "granted") {
        const location = await Location.getCurrentPositionAsync();
        console.log("location", location);
      } else {
        setErrorMsg("Permission to access location was denied");
      }
    }
  };
  const sendPhoto = () => {
    navigation.navigate("DefaultScreenPosts", {
      title: state.title,
      location: state.location,
      photo: photo,
    });
    resetState();
  };
  const resetState = () => {
    setState(initialState);
  };

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 40 }}
            >
              <View>
                <View style={styles.headerContainer}>
                  <Text style={styles.title}>Создать публикацию</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image
                      style={styles.iconArrow}
                      source={require("../../../assets/Image/arrow-left.png")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                  <Camera style={styles.camera} ref={setCamera}>
                    <View style={styles.photoContainer}>
                      <Image
                        source={{ uri: photo }}
                        style={{ width: 343, height: 240, borderRadius: 8 }}
                      />
                    </View>
                    <TouchableOpacity onPress={takePhoto} value={state.photo}>
                      <Image
                        style={styles.iconCamera}
                        source={require("../../../assets/Image/camera.png")}
                      />
                    </TouchableOpacity>
                  </Camera>
                </View>

                <View>
                  <Text style={styles.text}>Загрузитe фото</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Название..."
                    value={state.title}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, title: value }))
                    }
                  ></TextInput>
                  <Image
                    style={styles.iconMap}
                    source={require("../../../assets/Image/map-pin.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Локация..."
                    value={state.location}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        location: value,
                      }))
                    }
                  ></TextInput>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        backgroundColor: allFieldsFilled
                          ? "#FF5722"
                          : "#E8E8E8",
                      },
                    ]}
                    activeOpacity={0.8}
                    onPress={sendPhoto}
                    disabled={!allFieldsFilled}
                  >
                   <Text style={[styles.textBtn, { color: allFieldsFilled ? "#FFFFFF" : "#212121" }]}>
          Опубликовать
        </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Image
                      style={styles.iconTrash}
                      source={require("../../../assets/Image/trash.png")}
                    />
                  </TouchableOpacity>
                </View>
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
    top: 85,
  },
  iconTrash: {
    position: "absolute",
    top: 60,
    left: 140,
  },
  iconMap: {
    position: "absolute",
    top: 110,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: 343,
    height: 240,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  photoContainer: {
    position: "absolute",
  },
  text: {
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 16,
    marginLeft: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    marginBottom: 16,
    padding: 16,
    color: "#212121",
  },
  button: {
    backgroundColor: "#E8E8E8",
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 16,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },
});

export default CreatePosts;
