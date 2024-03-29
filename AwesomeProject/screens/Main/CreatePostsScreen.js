import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import uuid from "react-native-uuid";
import * as Location from "expo-location";
import MapPinIcon from "../../assets/icon/MapPinIcon ";
import TrashIcon from "../../assets/icon/TrashIcon ";
import CameraComponent from "../../components/CameraComponent";
import { uploadPostToServer } from "../../Redux/posts/postsOperations";
import uploadPhotoToServer, {
  firebaseStore,
} from "../../firebase/uploadPotoToServer";
import { useDispatch, useSelector } from "react-redux";

const initialState = { title: "", place: "" };

const CreatePostsScreen = () => {
  const [info, setInfo] = useState(initialState);
  const [location, setLocation] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [resetPhoto, setResetPhoto] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  });
  useEffect(() => {
    setIsDataValid(info.title !== "" && info.place !== "" && photo !== null);
  }, [info, photo]);

  const onDataPictureTaken = (photo, location) => {
    setPhoto(photo.uri);
    setLocation(location);
  };

  const sendPost = async () => {
    const photoUrl = await uploadPhotoToServer(photo, firebaseStore.post);

    const data = {
      ...info,
      photo: photoUrl,
      location,
      createdAt: Date.now(),
    };

    const newPost = {
      id: uuid.v4(),
      title: data.title,
      messageCount: 0,
      likeCount: 0,
      imgUri: data.photo,
      location: data.place,
      locationData: {
        latitude: data?.location?.latitude ?? 0,
        longitude: data?.location?.longitude ?? 0,
      },
      comments: [],
    };
    dispatch(uploadPostToServer(newPost));
    setPhoto(null);
    setResetPhoto(true);
    setInfo(initialState);
    navigation.navigate("DefaultScreen");
  };

  return (
    <View style={styles.container}>
      <CameraComponent
        onDataPictureTaken={onDataPictureTaken}
        resetPhoto={resetPhoto}
        setResetPhoto={setResetPhoto}
      />
      <View style={styles.uploadFoto}>
        <TouchableOpacity>
          <Text style={styles.uploadDescr}>Загрузите фото</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <TextInput
          style={{ ...styles.input, marginBottom: 16 }}
          placeholder="Название"
          placeholderTextColor="#BDBDBD"
          value={info.title}
          onChangeText={(val) =>
            setInfo((prevState) => ({ ...prevState, title: val }))
          }
        />

        <View style={styles.wrapperInput}>
          <View style={styles.wrapperIcon}>
            <MapPinIcon />
          </View>
          <TextInput
            style={{ ...styles.input, marginBottom: 32, paddingLeft: 28 }}
            placeholder="Локация"
            placeholderTextColor="#BDBDBD"
            value={info.place}
            onChangeText={(val) =>
              setInfo((prevState) => ({ ...prevState, place: val }))
            }
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: isDataValid ? "#FF6C00" : "#F6F6F6",
          },
        ]}
        onPress={sendPost}
      >
        <Text
          style={[
            styles.btnText,
            {
              color: isDataValid ? "#fff" : "#BDBDBD",
            },
          ]}
        >
          Опубликовать
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnDelete}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: "#fff",
  },
  camera: {
    height: 240,
    marginTop: 32,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  boxCamera: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCamera: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
  uploadFoto: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  uploadDescr: {
    color: "#BDBDBD",
    fontFamily: "roboto400",
  },
  input: {
    fontFamily: "roboto400",
    paddingVertical: 16,
    width: "100%",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderBottomWidth: 1,
  },
  form: {
    backgroundColor: "#fff",
    paddingTop: 32,
    alignItems: "center",
  },
  wrapperInput: {
    width: "100%",
    position: "relative",
  },
  wrapperIcon: {
    position: "absolute",
    top: 20,
    left: 0,
  },
  btnDelete: {
    marginTop: "auto",
    alignSelf: "center",
  },
  btnText: {
    fontFamily: "roboto400",
    fontSize: 16,
    lineHeight: 19,
  },
  btn: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    borderRadius: 100,
    marginTop: 28,
    marginBottom: 16,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    height: 150,
    width: 150,
  },
});
