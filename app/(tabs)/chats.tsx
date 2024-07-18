import React from "react";
import { FlatList, Image, View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Badge } from "react-native-paper";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/ui/button";
import { formatChatTime } from "@/utils/timeFormater";
import { Edit, FileIcon, ImageIcon, VideoIcon } from "lucide-react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { uchatData } from "@/utils/udata";
import { users } from "@/utils/user";
import { currentUser } from "@/utils/mockAuth";

const MessagesScreen = () => {
  const { onBackground } = useThemeColor();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.headerText}>
            Chats
          </Text>
          <Button onPress={() => console.log("New Chat")} icon={true}>
            {/* <Icon name="pencil" /> */}
            <Edit size={24} strokeWidth={2.4} color={onBackground} />
          </Button>
        </View>
        <FlatList
          style={styles.flatList}
          data={uchatData}
          renderItem={({ item }) => {
            const sender = users.find(
              (user) => user.id === item.lastMessage.senderId
            );

            const secId = item.participants.find((p) => p !== currentUser.id);
            const recipient = users.find((user) => user.id === secId);

            return (
              <Button style={styles.chatItem}>
                <View style={styles.chatItemContent}>
                  <View style={styles.chatItemLeft}>
                    <Image
                      source={
                        recipient?.profilePicture ||
                        require("@/assets/images/avatars/02.png")
                      }
                      style={styles.avatar}
                    />
                    <View>
                      <Text
                        variant="titleMedium"
                        style={{ textTransform: "capitalize" }}
                      >
                        {recipient?.username}
                      </Text>
                      <View
                        style={[
                          styles.messagePreview,
                          {
                            alignContent: "center",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                          },
                        ]}
                      >
                        {item.lastMessage.senderId === currentUser.id && (
                          <Text>You: </Text>
                        )}

                        {item.lastMessage.type === "text" ? (
                          <Text numberOfLines={1} variant="bodyMedium">
                            {item.lastMessage.content.toString()}
                          </Text>
                        ) : item.lastMessage.type === "video" ? (
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 4,
                            }}
                          >
                            <VideoIcon size={17} color={onBackground} />
                            <Text>Video</Text>
                          </View>
                        ) : item.lastMessage.type === "image" ? (
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 4,
                            }}
                          >
                            <ImageIcon size={17} color={onBackground} />
                            <Text>Image</Text>
                          </View>
                        ) : item.lastMessage.type === "document" ? (
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 4,
                            }}
                          >
                            <FileIcon size={17} color={onBackground} />
                            <Text>Document</Text>
                          </View>
                        ) : (
                          "(Open to view)"
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={styles.chatItemRight}>
                    <Text variant="labelSmall" style={styles.timestamp}>
                      {formatChatTime(item.lastMessage.timestamp)}
                    </Text>
                    {item.unreadCount["user123"] > 0 ? (
                      <Badge>{item.unreadCount["user123"]}</Badge>
                    ) : null}
                  </View>
                </View>
              </Button>
            );
          }}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerText: {
    fontWeight: "700",
  },
  flatList: {
    flex: 1,
  },
  chatItem: {
    padding: 12,
    width: "100%",
  },
  chatItemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  chatItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  chatItemRight: {
    alignItems: "flex-end",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  messagePreview: {
    maxWidth: 200,
  },
  timestamp: {
    marginBottom: 3,
  },
});

export default MessagesScreen;
