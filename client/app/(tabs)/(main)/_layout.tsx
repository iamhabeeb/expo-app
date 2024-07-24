import { useAuth } from "@clerk/clerk-expo";
import { Link, Slot, Stack } from "expo-router";
import { Rows, XIcon } from "lucide-react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, Image, Modal, Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {};

const Screen = (props: Props) => {
  const { userId } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const { colors, dark } = useTheme();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    if (!userId) {
      setShowModal(true);
    }

    // setTimeout(() => {
    //   bottomSheetRef.current?.close({ duration: 400 });
    // }, 4000);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => bottomSheetRef.current?.close()}>
      <View>
        <Slot />
        <BottomSheet
          snapPoints={[260]}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          style={{
            zIndex: 100,
          }}
        >
          <BlurView
            style={{
              height: "100%",
              width: "100%",
              zIndex: 100,
            }}
            intensity={100}
            tint="systemMaterial"
          >
            <BottomSheetView style={[styles.contentContainer]}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: dark ? "#000" : "#fff",
                  borderTopRightRadius: 36,
                  borderTopLeftRadius: 36,
                  paddingBottom: 12,
                  alignItems: "center",
                  gap: 8,
                  paddingHorizontal: 12,
                  paddingTop: 12,
                }}
              >
                <View
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    width: "95%",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 0.5,
                  }}
                >
                  <Pressable
                    android_ripple={{
                      color: dark ? "#ddd" : "#009eed",
                    }}
                    style={{
                      backgroundColor: dark ? "#fff" : "#007eed",
                      borderRadius: 20,
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      overflow: "hidden",
                      height: 50,
                    }}
                    onPress={() => Alert.alert("Sign in with Google")}
                  >
                    <Image
                      source={require("@/assets/images/google.png")}
                      width={30}
                      height={30}
                      style={{ width: 30, height: 30, borderRadius: 100 }}
                    />
                    <Text
                      variant="titleSmall"
                      style={{ color: dark ? "#000" : "#fff" }}
                    >
                      Continue with Google
                    </Text>
                  </Pressable>
                </View>

                <View
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    width: "95%",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 0.5,
                  }}
                >
                  <Pressable
                    onPress={() => Alert.alert("Sign in with Email")}
                    android_ripple={{
                      color: dark ? "#333" : "#ddd",
                    }}
                    style={{
                      backgroundColor: dark ? "#222" : "#EDF1FF",
                      borderRadius: 20,
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      height: 50,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/mail.jpg")}
                      width={26}
                      height={26}
                      style={{ width: 26, height: 26, borderRadius: 100 }}
                    />
                    <Text
                      variant="titleSmall"
                      style={{ color: dark ? "#fff" : "#000" }}
                    >
                      Continue with email
                    </Text>
                  </Pressable>
                </View>

                <View
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    width: "95%",
                    justifyContent: "center",
                    marginTop: 18,
                    alignItems: "center",
                    elevation: 0.5,
                  }}
                >
                  <Pressable
                    android_ripple={{
                      color: dark ? "#333" : "#ddd",
                    }}
                    style={{
                      backgroundColor: dark ? "#000" : "#fff",
                      borderRadius: 20,
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      height: 50,
                      borderWidth: 2,
                      borderColor: dark ? "#333" : "#EDF1FF",
                    }}
                  >
                    <Text
                      variant="titleSmall"
                      style={{ color: dark ? "#fff" : "#000" }}
                    >
                      Login
                    </Text>
                  </Pressable>
                </View>
              </View>
            </BottomSheetView>
          </BlurView>
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Screen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
