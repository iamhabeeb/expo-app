// ChatScreen.tsx
import { ThemedView } from "@/components/ThemedView";
import { Image as ImageIcon, SendHorizonal } from "lucide-react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  TouchableNativeFeedback,
  Animated,
  Image,
} from "react-native";
import { useTheme } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

interface Message {
  id: number;
  text: string;
  type: "text" | "image" | "file";
  image: string | null;
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<string | null>(null);
  const inputRef = useRef<TextInput>(null);
  const scrollAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fetch messages from API or database
    setMessages([
      { id: 1, text: "Hello!", type: "text", image: null },
      { id: 2, text: "How are you?", type: "text", image: null },
    ]);
  }, []);

  const handleSendMessage = () => {
    // Send message to API or database
    if (newMessage.trim().length > 0 || image || file) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          type: image ? "image" : file ? "file" : "text",
          image,
        },
      ]);
      setNewMessage("");
      setImage(null);
      setFile(null);
      inputRef.current?.blur();
    } else {
      alert("Can't send empty message");
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const { colors } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <Animated.FlatList
        data={messages}
        renderItem={({ item }) => (
          <View>
            <View style={styles.messageContainer}>
              {item.type === "text" ? (
                <Text style={styles.messageText}>{item.text}</Text>
              ) : item.type === "image" ? (
                <Image
                  source={{ uri: item.image as string }}
                  style={styles.image}
                  resizeMode="cover"
                />
              ) : (
                <Text style={styles.messageText}>File: {item.text}</Text>
              )}
            </View>
          </View>
        )}
        contentContainerStyle={{ padding: 14 }}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
          { useNativeDriver: true }
        )}
      />
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: "#eee",
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "#ddd",
            margin: 12,
          },
        ]}
      >
        <Pressable
          style={{
            height: 52,
            paddingHorizontal: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={pickImage}
        >
          <ImageIcon size={24} color={colors.secondary} />
        </Pressable>
        <TextInput
          ref={inputRef}
          style={{
            flex: 1,
            height: 52,
          }}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Type a message..."
        />
        <Pressable
          onPress={() => handleSendMessage()}
          style={{
            height: 52,
            paddingHorizontal: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SendHorizonal size={24} color={colors.secondary} />
        </Pressable>
      </View>
    </ThemedView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    marginBottom: 6,
    paddingVertical: 12,
    backgroundColor: "#009ffd",
    paddingHorizontal: 16,
    borderRadius: 24,
    flex: 0,
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
