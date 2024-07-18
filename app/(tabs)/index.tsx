import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadLogo from "../../components/head-logo";
import QuickUpdate from "../../components/quick-update";
import ScrollFeeds from "../../components/scroll-feeds";
import { ScrollView, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { useSharedValue } from "react-native-reanimated";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <ThemedView style={{ overflow: "scroll" }}>
        <ScrollView>
          <HeadLogo />
          <QuickUpdate />
          <ScrollFeeds />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default HomeScreen;
