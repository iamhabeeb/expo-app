import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

function ProfileScreen({}: Props) {
  return (
    <SafeAreaView>
      <ThemedView>
        <Text>ProfileScreen</Text>
      </ThemedView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
