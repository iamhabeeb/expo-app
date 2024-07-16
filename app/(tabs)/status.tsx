import { ThemedView } from "@/components/ThemedView";
import { Icon } from "@/components/navigation/TabBarIcon";
import React from "react";
import { Dimensions, Pressable, SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-paper";

const StatusScreen = () => {
  return (
    <ThemedView
      style={{
        height: Dimensions.get("window").height,
        flex: 1,
        paddingTop: 52,
        paddingHorizontal: 12,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text variant="headlineMedium" style={{ fontWeight: 700 }}>
            Status
          </Text>
          <Button mode="contained-tonal" onPress={() => console.log("Pressed")}>
            <Icon name="add" />
          </Button>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
};

export default StatusScreen;
