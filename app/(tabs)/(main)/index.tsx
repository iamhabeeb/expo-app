import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScrollFeeds from "@/components/scroll-feeds";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollFeeds />
    </SafeAreaView>
  );
};

export default HomeScreen;
