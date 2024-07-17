import React from "react";
import { FlatList, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/ui/button";
import { BellIcon, Edit } from "lucide-react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { storiesUpdates } from "@/utils/output";
import { currentUser } from "@/utils/mockAuth";

const HomeScreen = () => {
  const { onBackground } = useThemeColor();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.headerText}>
            Purp
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Button
              badge
              onPress={() => console.log("Notiication")}
              icon={true}
            >
              {/* <Icon name="pencil" /> */}
              <BellIcon size={24} strokeWidth={2.4} color={onBackground} />
            </Button>
            <Button onPress={() => console.log("New Chat")} icon={true}>
              {/* <Icon name="pencil" /> */}
              <Edit size={24} strokeWidth={2.4} color={onBackground} />
            </Button>
          </View>
        </View>
        <View>
          <View>
            <Image
              source={currentUser.profilePicture}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <FlatList
            horizontal={true}
            snapToStart={true}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingHorizontal: 16,
            }}
            keyExtractor={(item) => item.id}
            data={storiesUpdates}
            renderItem={({ item }) => (
              <Button
                style={{
                  marginRight: 12,
                  padding: 6,
                  borderRadius: 100,
                  overflow: "hidden",
                  backgroundColor: "#333",
                  width: 80,
                  height: 80,
                }}
              >
                {item.media === "image" ? (
                  <Image
                    source={item.mediaUrl}
                    style={{ height: 80, width: 80 }}
                  />
                ) : null}
              </Button>
            )}
          />
        </View>

        {/* <PlayVideo /> */}
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
    padding: 16,
    justifyContent: "space-between",
    borderColor: "#000",
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

export default HomeScreen;
