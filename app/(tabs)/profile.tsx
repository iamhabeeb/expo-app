import { ThemedView } from "@/components/ThemedView";
import AsteriskIcon from "@/components/asterisk";
import PostItem from "@/components/post-item";
import ProfileHeader from "@/components/profile-header";
import Button from "@/components/ui/button";
import { currentUser } from "@/utils/mockAuth";
import { postData } from "@/utils/new-data";
import { PostType } from "@/utils/th";
import { UserType, users } from "@/utils/user";
import { useAuth, useSession, useUser } from "@clerk/clerk-expo";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Redirect, useRouter } from "expo-router";
import { ArrowLeft, Asterisk } from "lucide-react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  TextInput,
  View,
} from "react-native";
import {
  ActivityIndicator,
  Snackbar,
  Text,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const ProfileScreen = (props: Props) => {
  const posts = postData.filter((p) => currentUser.posts.includes(p.id));
  const { isSignedIn } = useSession();
  const router = useRouter();
  const { dark } = useTheme();
  const { signOut } = useAuth();
  const { user } = useUser();
  const [collectUserInfo, setCollectUserInfo] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [sheetIndex, setSheetIndex] = useState(2);

  useEffect(() => {
    if (!user?.firstName && !user?.lastName && !user?.username) {
      setCollectUserInfo(true);
      bottomSheetRef.current?.present();
    }
  }, []);

  useEffect(() => {
    if (!isSignedIn) {
      <Snackbar visible onDismiss={() => ""}>
        <Text>You need to login first</Text>
      </Snackbar>;
      return router.navigate("/login");
    }
  }, []);

  const keyExtractor = (item: PostType) => item.id + "_POST-ITEM";

  const renderItems = useCallback(
    ({ item }: { item: PostType; index: number }) => {
      const user = currentUser;
      return <PostItem item={item} user={user as UserType} />;
    },
    []
  );

  const handleSheetChanges = useCallback(() => {}, []);

  if (!isSignedIn) {
    return (
      <SafeAreaView>
        <ThemedView
          style={{
            height: Dimensions.get("window").height,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            gap: 24,
          }}
        >
          <AsteriskIcon />
          <Text
            variant="displayMedium"
            style={{ textAlign: "center", fontWeight: "700" }}
          >
            Sign in to your account
          </Text>

          <View
            style={{
              borderRadius: 20,
              overflow: "hidden",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
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
                alignContent: "center",
              }}
              onPress={() => {
                router.navigate("/login");
                signOut();
              }}
            >
              <Text
                variant="titleSmall"
                style={{ color: dark ? "#000" : "#fff" }}
              >
                Sign In
              </Text>
            </Pressable>
          </View>
        </ThemedView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={["80", "95"]}
        onChange={handleSheetChanges}
        animateOnMount={true}
        enablePanDownToClose={false}
      >
        <BottomSheetView tabIndex={0}>
          <View style={{ gap: 48, padding: 16, paddingTop: 42 }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 6,
              }}
            >
              <Asterisk
                size={80}
                strokeWidth={2.6}
                color={dark ? "#fff" : "#000"}
              />
            </View>

            {sheetIndex === 0 ? (
              <View style={{ gap: 48 }}>
                <View>
                  <Text
                    variant="headlineLarge"
                    style={{ fontWeight: "800", textAlign: "center" }}
                  >
                    Edit Profile
                  </Text>
                  <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                    Customize your Asterisk profile
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      paddingHorizontal: 18,
                      paddingVertical: 14,
                      borderWidth: 0.4,
                      borderColor: "#ccc",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: "#444" }} variant="labelSmall">
                        Name
                      </Text>
                      <BottomSheetTextInput
                        style={{ fontSize: 17 }}
                        cursorColor={"#000"}
                        placeholder="@ableez"
                      />
                    </View>
                    <Asterisk size={32} color={dark ? "#ccc" : "#999"} />
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 18,
                      paddingVertical: 14,
                      borderWidth: 0.4,
                      borderColor: "#ccc",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: "#444" }} variant="labelSmall">
                        Firstname
                      </Text>
                      <BottomSheetTextInput
                        style={{ fontSize: 17 }}
                        cursorColor={"#000"}
                        placeholder="Abdullahi"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 18,
                      paddingVertical: 14,
                      borderWidth: 0.4,
                      borderColor: "#ccc",
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: "#444" }} variant="labelSmall">
                        Lastname
                      </Text>
                      <BottomSheetTextInput
                        style={{ fontSize: 17 }}
                        cursorColor={"#000"}
                        placeholder="Ahmed"
                      />
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View
                  style={{
                    paddingHorizontal: 18,
                    paddingVertical: 14,
                    borderWidth: 0.4,
                    borderColor: "#ccc",
                    borderRadius: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: "#444" }} variant="labelSmall">
                      Bio
                    </Text>
                    <BottomSheetTextInput
                      style={{ fontSize: 17 }}
                      cursorColor={"#000"}
                      multiline
                      numberOfLines={3}
                      placeholder="Tell us a little about yourself"
                    />
                  </View>
                </View>
              </View>
            )}

            <Button title={"Next"} onPress={() => setSheetIndex(-1)} />
            {sheetIndex === -1 ? (
              <Pressable style={{ padding: 8, borderRadius: 24 }}>
                <ArrowLeft size={24} color={"#333"} />
              </Pressable>
            ) : null}
          </View>
        </BottomSheetView>
      </BottomSheetModal>

      <ThemedView
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            data={posts}
            keyExtractor={keyExtractor}
            renderItem={renderItems}
            ListHeaderComponent={() => (
              <View
                style={{ borderBottomWidth: 0.2, borderBottomColor: "#ccc" }}
              >
                <ProfileHeader />
                <Text
                  variant="titleLarge"
                  style={{ fontWeight: "700", padding: 16 }}
                >
                  Posts
                </Text>
              </View>
            )}
            contentContainerStyle={{
              paddingBottom: 16,
            }}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
