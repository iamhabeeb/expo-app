import { currentUser } from "@/utils/mockAuth";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import {
  AlignLeft,
  Asterisk,
  Camera,
  Hash,
  LucideImages,
  Mic,
} from "lucide-react-native";
import { Link, useNavigation } from "expo-router";
import * as Haptics from "expo-haptics";

const activityIcons = [
  {
    icon: (
      <LucideImages
        size={30}
        strokeWidth={1.5}
        color={"#bcbcbc"}
        style={{ opacity: 40 }}
      />
    ),
    title: "Upload Images",
    param: {
      todo: "upload_image",
    },
  },
  {
    icon: (
      <Camera
        size={30}
        strokeWidth={1.5}
        color={"#bcbcbc"}
        style={{ opacity: 40 }}
      />
    ),
    title: "Take a picture",
    param: {
      todo: "open_camera",
    },
  },
  // {
  //   icon: (
  //     <Mic
  //       size={28}
  //       strokeWidth={1.5}
  //       color={"#bcbcbc"}
  //       style={{ opacity: 40 }}
  //     />
  //   ),
  //   title: "Voicenote",
  // },
  // {
  //   icon: (
  //     <Hash
  //       size={28}
  //       strokeWidth={1.5}
  //       color={"#bcbcbc"}
  //       style={{ opacity: 40 }}
  //     />
  //   ),
  //   title: "Tag a friend",
  // },
  // {
  //   icon: (
  //     <AlignLeft
  //       size={28}
  //       strokeWidth={1.5}
  //       color={"#bcbcbc"}
  //       style={{ opacity: 40 }}
  //     />
  //   ),
  //   title: "Start a thread",
  // },
];

const QuickUpdate = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#d9d9d9",
        padding: 16,
        marginBottom: 16,
      }}
    >
      <Link href={"/profile"}>
        <View>
          <Image
            source={{ uri: currentUser.profilePicture }}
            style={{
              width: 52,
              height: 52,
              borderRadius: 100,
            }}
          />
        </View>
      </Link>
      <View style={{ flex: 3, gap: 12 }}>
        <Link href={"/Newpost/newpost"}>
          <View>
            <Text variant="titleMedium" style={{ textTransform: "capitalize" }}>
              {currentUser.username}
            </Text>
            <Text variant="bodyLarge" style={{ color: "#999" }}>
              What's new?
            </Text>
          </View>
        </Link>

        <FlatList
          horizontal={true}
          data={activityIcons}
          keyExtractor={({ title }) => title}
          contentContainerStyle={{
            justifyContent: "space-between",
            gap: 16,
          }}
          renderItem={({ item }) => {
            return (
              <Link
                onPress={() =>
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
                }
                href={{
                  pathname: "/Newpost/newpost",
                  params: item.param,
                }}
              >
                <View style={{ marginRight: 0 }}>{item.icon}</View>
              </Link>
            );
          }}
        />
      </View>
    </View>
  );
};

export default QuickUpdate;
