import {
  Dimensions,
  Keyboard,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Slot, useNavigation } from "expo-router";
import { Text, useTheme } from "react-native-paper";
import { TextInput } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const _layout = (props: Props) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    setKeyboardVisible(Keyboard.isVisible());
    if (keyboardVisible) {
      setKeyboardHeight(Keyboard.metrics()!?.height);
    }

    Keyboard.addListener("keyboardWillShow", (e) => {});
  });

  console.log(keyboardHeight, keyboardVisible);
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ height: Dimensions.get("window").height }}>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            backgroundColor: "#fff",
            height: 64,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeft size={24} color={colors.onBackground} />
          </Pressable>

          <Text variant="titleMedium">Chat</Text>
        </View>
        <Slot />
      </View>
    </SafeAreaView>
  );
};

export default _layout;

const styles = StyleSheet.create({});
