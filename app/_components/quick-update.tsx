import { currentUser } from "@/utils/mockAuth";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import {
  AlignLeft,
  Asterisk,
  Camera,
  Hash,
  LucideImages,
  Mic,
} from "lucide-react-native";

const activityIcons = [
  {
    icon: <LucideImages size={28} color={"#bcbcbc"} style={{ opacity: 40 }} />,
    title: "Upload Images",
  },
  {
    icon: <Camera size={28} color={"#bcbcbc"} style={{ opacity: 40 }} />,
    title: "Take a picture",
  },
  {
    icon: <Mic size={28} color={"#bcbcbc"} style={{ opacity: 40 }} />,
    title: "Voicenote",
  },
  {
    icon: <Hash size={28} color={"#bcbcbc"} style={{ opacity: 40 }} />,
    title: "Tag a friend",
  },
  {
    icon: <AlignLeft size={28} color={"#bcbcbc"} style={{ opacity: 40 }} />,
    title: "Start a thread",
  },
];

const QuickUpdate = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 60 : 100,
          flexDirection: "row",
          gap: 16,
          alignItems: "flex-start",
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: "#bcbcbc",
          padding: 16,
        },
      ]}
    >
      <Image
        source={currentUser.profilePicture}
        style={{ width: 48, height: 48, borderRadius: 100 }}
      />
      <View style={{ flex: 3, gap: 12 }}>
        <View>
          <Text variant="titleMedium" style={{ textTransform: "capitalize" }}>
            {currentUser.username}
          </Text>
          <Text variant="bodyLarge" style={{ color: "#999" }}>
            What's new?
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={activityIcons}
          contentContainerStyle={{
            justifyContent: "space-between",
            width: "85%",
          }}
          renderItem={({ item }) => {
            return <View style={{ marginRight: 0 }}>{item.icon}</View>;
          }}
        />
      </View>
    </Pressable>
  );
};

export default QuickUpdate;
