import { ThemedView } from "@/components/ThemedView";
import { currentUser } from "@/utils/mockAuth";
import { UserType, users } from "@/utils/user";
import React, { memo } from "react";
import {
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, useTheme } from "react-native-paper";

type Props = {};

const ExploreScreen = (props: Props) => {
  return (
    <ThemedView style={{  flex: 1 }}>
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20, paddingHorizontal: 16 }}
        renderItem={({ index, item }) => <ListItem item={item} index={index} />}
      />
    </ThemedView>
  );
};

export default ExploreScreen;

const ListItem = memo(({ item, index }: { item: UserType; index: number }) => {
  const { dark, colors } = useTheme();
  const isFollowed = item.followers.includes(currentUser.id);

  const getButtonStyles = ({ pressed }: { pressed: boolean }) => ({
    borderWidth: 1.5,
    borderColor: dark
      ? isFollowed
        ? "rgba(158, 158, 158, 0.2)"
        : "rgba(0, 126, 237, 0.2)"
      : isFollowed
      ? "rgba(158, 158, 158, 0.2)"
      : "rgba(0, 126, 237, 0.2)",
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: dark
      ? isFollowed
        ? pressed
          ? "rgba(158, 158, 158, 0.3)"
          : "rgba(158, 158, 158, 0.1)"
        : pressed
        ? "rgba(0, 126, 237, 0.3)"
        : "rgba(0, 126, 237, 0.1)"
      : isFollowed
      ? pressed
        ? "rgba(158, 158, 158, 0.3)"
        : "rgba(158, 158, 158, 0.1)"
      : pressed
      ? "rgba(0, 126, 237, 0.3)"
      : "rgba(0, 126, 237, 0.1)",
  });

  const getTextStyles = () => ({});

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <Image source={item.profilePicture} style={{ width: 52, height: 52 }} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text variant="titleMedium" style={{ textTransform: "capitalize" }}>
            {item.username}
          </Text>
          <Text style={{ fontWeight: "400", color: "#a0a0a0" }}>
            {item.fullName}
          </Text>
          <Text variant="bodySmall">{item.followers.length} followers</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 82,
            height: 34,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: isFollowed ? "#eee" : "#007eed",
          }}
        >
          <Text style={{ fontWeight: "600", color: isFollowed ? "#999" : "#fff" }}>
            {isFollowed ? "Followed" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
