import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ThemedView } from "@/components/ThemedView";
import { currentUser } from "@/utils/mockAuth";
import { PenSquare } from "lucide-react-native";
import { TextInput } from "react-native";
import { Switch, Text } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

type Props = {};

const EditProfile: React.FC<Props> = (props: Props) => {
  const [userInfo, setUserInfo] = useState({
    fullName: currentUser.fullName,
    username: currentUser.username,
    bio: currentUser.bio,
    profilePicture: currentUser.profilePicture,
    isPrivate: false, // Default value for private profile
  });

  const [originalUserInfo, setOriginalUserInfo] = useState(userInfo);

  const toggleSwitch = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      isPrivate: !prevState.isPrivate,
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    if (hasChanges) {
      // Here you can handle the update logic, e.g., API call
      console.log("Updated User Info:", userInfo);
      // After updating, you might want to set the original info to the updated info
      setOriginalUserInfo(userInfo);
    }
  };

  // Check if there are changes
  const hasChanges =
    userInfo.fullName !== originalUserInfo.fullName ||
    userInfo.username !== originalUserInfo.username ||
    userInfo.bio !== originalUserInfo.bio ||
    userInfo.isPrivate !== originalUserInfo.isPrivate ||
    userInfo.profilePicture !== originalUserInfo.profilePicture;

  const pickImage = async () => {
    // Request permission to access the camera roll
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      cameraType: ImagePicker.CameraType.front,
    });

    if (!result.canceled) {
      setUserInfo((prevState) => ({
        ...prevState,
        profilePicture: result.assets[0].uri, // Update the profile picture
      }));
    }
  };

  return (
    <ThemedView
      style={{
        height: Dimensions.get("window").height,
        padding: 16,
      }}
    >
      <View
        style={{
          padding: 16,
          borderWidth: 0.8,
          borderColor: "#ddd",
          borderRadius: 24,
          width: "100%",
        }}
      >
        <View style={{ gap: 18 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 16,
            }}
          >
            <Image
              source={{ uri: userInfo.profilePicture }}
              style={{ width: 90, height: 90, borderRadius: 100 }}
            />
            <TouchableNativeFeedback onPress={pickImage}>
              <View
                style={{
                  padding: 4,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 8,
                }}
              >
                <PenSquare size={20} color={"#000"} />
                <Text>Change Image</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ gap: 10 }}>
            <View>
              <Text variant="labelMedium" style={{ padding: 4 }}>
                Username
              </Text>
              <TextInput
                placeholder="fullname"
                selectTextOnFocus
                clearButtonMode="while-editing"
                selectionColor={"rgba(105, 156, 255, 0.38)"}
                value={userInfo.fullName}
                onChangeText={(text) => handleInputChange("fullName", text)}
                style={styles.input}
              />
            </View>

            <View>
              <Text variant="labelMedium" style={{ padding: 4 }}>
                Fullname
              </Text>
              <TextInput
                placeholder="fullname"
                selectTextOnFocus
                clearButtonMode="while-editing"
                selectionColor={"rgba(105, 156, 255, 0.38)"}
                value={userInfo.username}
                onChangeText={(text) => handleInputChange("username", text)}
                style={styles.input}
              />
            </View>

            <View>
              <Text variant="labelMedium" style={{ padding: 4 }}>
                Bio
              </Text>
              <TextInput
                placeholder="bio"
                selectTextOnFocus
                clearButtonMode="while-editing"
                selectionColor={"rgba(105, 156, 255, 0.38)"}
                value={userInfo.bio}
                onChangeText={(text) => handleInputChange("bio", text)}
                multiline
                style={styles.input}
              />
            </View>

            <View>
              <Text variant="labelMedium" style={{ paddingVertical: 4 }}>
                Private profile
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text variant="bodySmall" style={{ flex: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi quaerat.
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#ddd" }}
                  thumbColor={userInfo.isPrivate ? "#007eed" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={userInfo.isPrivate}
                />
              </View>
            </View>
          </View>
          <TouchableNativeFeedback
            disabled={!hasChanges}
            onPress={handleUpdate}
          >
            <View
              style={[styles.updateButton, { opacity: hasChanges ? 1 : 0.5 }]}
            >
              <Text style={styles.updateButtonText}>Update</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    fontSize: 16,
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: "#007eed",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EditProfile;
