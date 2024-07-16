import { Tabs } from "expo-router";
import React from "react";
import { Text, useTheme } from "react-native-paper";

import { Icon } from "@/components/navigation/TabBarIcon";
import { Image, View } from "react-native";
import { Home } from "lucide-react-native";
import { currentUser } from "@/utils/mockAuth";

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarActiveTintColor: colors.onBackground,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              size={26}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              size={28}
              name={focused ? "chatbubble" : "chatbubble-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: "Status",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              size={26}
              name={focused ? "image" : "image-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) =>
            currentUser.id ? (
              <View
                style={{
                  borderWidth: 2,
                  borderColor: focused ? "#000" : colors.background,
                  borderRadius: 100,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={currentUser.profilePicture}
                  style={{ width: 36, height: 36 }}
                />
              </View>
            ) : (
              <Icon
                size={26}
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
        }}
      />
    </Tabs>
  );
}
