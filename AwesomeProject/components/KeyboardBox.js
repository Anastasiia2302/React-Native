import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useFont } from "../assets/fonts/fontsExpoLoading";


const KeyboardBox = ({ children, keyboardHide }) => {
  const { fonts, onLayoutRootView } = useFont();

  if (!fonts) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={{ flex: 1, maxHeight: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardBox;
