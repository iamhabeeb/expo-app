import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Button from "@/components/ui/button";
import { Text, useTheme } from "react-native-paper";
import { AlignRight, BellIcon, UserRoundCogIcon } from "lucide-react-native";
import { currentUser } from "@/utils/mockAuth";
import { users } from "@/utils/user";
import { Link } from "expo-router";

type Props = {};

const ProfileHeader = (props: Props) => {
  const { colors, dark } = useTheme();

  const followers = currentUser.followers.map((followerId) => {
    const profile = users.find((user) => user.id === followerId);
    if (profile) return profile;
    return null;
  });

  return (
    <View style={{ backgroundColor: dark ? "#000" : "#fff" }}>
      <View style={styles.header}>
        <Pressable>
          <BellIcon size={24} color={colors.onBackground} />
        </Pressable>
        <Button onPress={() => console.log("New Chat")} icon={true}>
          <AlignRight size={24} strokeWidth={2.6} color={colors.onBackground} />
        </Button>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              variant="titleLarge"
              style={{ fontWeight: "700", fontSize: 28 }}
            >
              {currentUser.fullName}
            </Text>
            <Text variant="titleMedium">{currentUser.username}</Text>
          </View>
          <View>
            <Image
              source={{ uri: currentUser.profilePicture }}
              style={{ width: 80, height: 80, borderRadius: 100 }}
            />
          </View>
        </View>
        <View>
          <Text>{currentUser.bio}</Text>
          <FlatList
            data={followers.splice(0, 3)}
            horizontal
            contentContainerStyle={{
              paddingLeft: 7,
              alignContent: "center",
              alignItems: "center",
            }}
            ListFooterComponent={() => (
              <Text style={{ color: dark ? "#666" : "#bbb", marginLeft: 5 }}>
                {currentUser.followers.length} followers
              </Text>
            )}
            keyExtractor={(item) => item?.id! + item?.username!}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    borderWidth: 3,
                    borderRadius: 100,
                    borderColor: "#fff",
                    marginLeft: -12,
                  }}
                >
                  <Image
                    source={{ uri: item?.profilePicture }}
                    style={{ width: 20, height: 20, borderRadius: 100 }}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginVertical: 14 }}>
          <Link href={"/edit-profile"} asChild>
            <Pressable
              style={{
                flex: 1,
                paddingHorizontal: 10,
                borderWidth: 1.2,
                borderColor: "#ddd",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 10,
                borderRadius: 12,
              }}
            >
              <Text>Edit profile</Text>
            </Pressable>
          </Link>

          <TouchableHighlight
            style={{
              flex: 1,
              paddingHorizontal: 10,
              borderWidth: 1.2,
              borderColor: "#ddd",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              borderRadius: 12,
            }}
          >
            <Text>Share profile</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerText: {
    fontWeight: "700",
  },
});
