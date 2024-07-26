import { useRouter } from "expo-router";
import { Asterisk, View } from "lucide-react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "react-native-paper";

const AsteriskIcon = () => {
  const { colors, dark } = useTheme();
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={() => router.navigate("/")}>
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      ></View>
    </TouchableWithoutFeedback>
  );
};

export default AsteriskIcon;
