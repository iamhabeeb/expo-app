import { ThemedView } from "@/components/ThemedView";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Popover from "react-native-popover-view";
import { currentUser } from "@/utils/mockAuth";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import {
  AlignLeft,
  Camera,
  Hash,
  Images,
  LucideImages,
  Mic,
  X,
} from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { popularHashtags } from "@/utils/tags";
import { Placement } from "react-native-popover-view/dist/Types";
import { useLocalSearchParams } from "expo-router";
import * as Haptics from "expo-haptics";

type Props = {};

const NewPost = (props: Props) => {
  const tagTouchable = useRef<TouchableHighlight | null>(null);
  const [showPopover, setShowPopover] = useState(false);
  const [selectedImages, setSelectedImages] = useState<
    ImagePicker.ImagePickerAsset[]
  >([]);
  const [postText, setPostText] = useState<string>("");
  const { dark } = useTheme();
  let { todo } = useLocalSearchParams();
  console.log("TODO:", todo);

  useEffect(() => {
    if (todo === "upload_image") {
      handleImagePick();
    }
    if (todo === "open_camera") {
      // open camera
    }
  }, []);

  const handleImagePick = async () => {
    // Request permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Change this if you want to allow multiple selection
      aspect: [4, 3],
      orderedSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      if (selectedImages.length < 5) {
        setSelectedImages((prevImages) => [...prevImages, ...result.assets]);
      } else {
        alert("You can only select up to 5 images.");
      }
    }
  };

  const removeImage = (uri: string) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image.uri !== uri)
    );
  };

  const renderTagItems = useCallback(
    ({ item }: { item: { tag: string; slug: string } }) => (
      <Pressable
        style={{
          paddingHorizontal: 20,
          width: "100%",
          paddingVertical: 16,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Hash size={20} color={"#ccc"} />
        <Text variant="bodyLarge">{item.tag}</Text>
      </Pressable>
    ),
    []
  );

  return (
    <View
      style={{
        height: Dimensions.get("window").height,
        backgroundColor: dark ? "#000" : "#fff",
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingTop: 2,
            gap: 12,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: currentUser.profilePicture }}
            style={{ width: 48, height: 48, borderRadius: 100 }}
          />
          <View style={{ flex: 1, marginTop: 12 }}>
            <Text variant="titleMedium">{currentUser.username}</Text>
            <TextInput
              editable
              multiline
              onChangeText={(e) => setPostText(e)}
              maxLength={250}
              placeholder="What's new?"
              style={{
                fontWeight: "400",
                fontSize: 16,
                paddingRight: 14,
                marginBottom: 10,
              }}
            />
          </View>
        </View>

        {selectedImages.length > 0 ? (
          <View style={{ paddingBottom: 12 }}>
            <FlatList
              data={selectedImages}
              keyExtractor={(item) => item.uri + item.fileName}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              contentContainerStyle={{ paddingLeft: 68 }}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 200,
                    paddingTop: 12,
                    height: 300,
                    borderRadius: 16,
                    marginRight: 16,
                  }}
                >
                  <Image
                    source={{ uri: item.uri }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 16,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: "#ccc",
                    }}
                  />
                  <TouchableWithoutFeedback
                    onPress={() => removeImage(item.uri)}
                  >
                    <View
                      style={{
                        backgroundColor: "#ddd",
                        borderRadius: 100,
                        padding: 4,
                        position: "absolute",
                        top: 8,
                        right: -6,
                      }}
                    >
                      <X size={16} color={"#222"} />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}
            />
          </View>
        ) : null}

        <View style={{ paddingLeft: 64 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Pressable onPress={handleImagePick} style={{ padding: 8 }}>
              <Images size={32} strokeWidth={1.5} color={"#999"} opacity={40} />
            </Pressable>
            {/* <Pressable
              ref={tagTouchable}
              onPress={() => setShowPopover((p) => !p)}
              style={{ padding: 8 }}
            >
              <Hash size={28} strokeWidth={1.5} color={"#999"} opacity={40} />
            </Pressable> */}
            {/* #TODO: ADD TAGS FEATURE IN FUTURE UPDATE */}
          </View>
          <Popover
            from={tagTouchable}
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
            popoverStyle={{
              borderRadius: 14,
              maxHeight: Dimensions.get("window").height * 0.6,
            }}
            offset={1}
            backgroundStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.07)",
            }}
            verticalOffset={0}
            placement={Placement.BOTTOM}
          >
            <View style={{ height: 400, width: 280 }}>
              <FlatList
                data={popularHashtags}
                showsVerticalScrollIndicator={false}
                keyExtractor={({ slug, tag }) => slug + tag}
                renderItem={({ item }) => renderTagItems({ item })}
              />
            </View>
          </Popover>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 15,
    padding: 5,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default NewPost;

const activityIcons = [
  {
    id: "upload_image",
    icon: (
      <LucideImages
        size={28}
        strokeWidth={1.5}
        color={"#bcbcbc"}
        style={{ opacity: 40 }}
      />
    ),
    title: "Upload Images",
  },
  {
    id: "take_picture",
    icon: (
      <Camera
        size={28}
        strokeWidth={1.5}
        color={"#bcbcbc"}
        style={{ opacity: 40 }}
      />
    ),
    title: "Take a picture",
  },
  {
    id: "voicenote",
    icon: (
      <Mic
        size={28}
        strokeWidth={1.5}
        color={"#bcbcbc"}
        style={{ opacity: 40 }}
      />
    ),
    title: "Voicenote",
  },
  {
    id: "tag_friend",
    icon: (
      <Hash
        size={28}
        strokeWidth={1.5}
        color={"#bcbcbc"}
        style={{ opacity: 40 }}
      />
    ),
    title: "Tag a friend",
  },
  {
    id: "start_thread",
    icon: (
      <AlignLeft
        size={28}
        strokeWidth={1.5}
        color={"#bcbcbc"}
        style={{ opacity: 40 }}
      />
    ),
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
          borderBottomColor: "#d9d9d9",
          padding: 16,
          marginBottom: 16,
        },
      ]}
    >
      <Image
        source={{ uri: currentUser.profilePicture }}
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

//  <FlatList
//    data={users}
//    showsVerticalScrollIndicator={false}
//    keyExtractor={({ id }) => id + "USER"}
//    contentContainerStyle={{ gap: 8 }}
//    renderItem={({ index, item }) => {
//      return (
//        <Pressable
//          style={{
//            paddingHorizontal: 16,
//            width: 230,
//            paddingVertical: 12,
//            borderRadius: 12,
//            backgroundColor: "#eee",
//            flexDirection: "row",
//            alignItems: "center",
//          }}
//        >
//          <Image
//            source={item.profilePicture}
//            style={{ width: 40, height: 40, borderRadius: 200 }}
//          />
//          <Text variant="titleMedium">{item.username}</Text>
//        </Pressable>
//      );
//    }}
//  />;
