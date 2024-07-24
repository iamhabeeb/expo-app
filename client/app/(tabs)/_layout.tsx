import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, useTheme } from "react-native-paper";

import { Icon } from "@/components/navigation/TabBarIcon";
import { Image, Pressable, TextInput, Touchable, View } from "react-native";
import { currentUser } from "@/utils/mockAuth";
import {
  EllipsisIcon,
  Home,
  Plus,
  Search,
  X,
  XIcon,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@clerk/clerk-expo";

export default function TabLayout() {
  const { colors } = useTheme();
  const { userId } = useAuth();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (!userId) {
      setShowHeader(true);
    } else {
      setShowHeader(true);
    }
  }, []);

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarActiveTintColor: colors.onBackground,
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: {
          height: 58,
        },
      }}
    >
      <Tabs.Screen
        name="(main)"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          headerShown: showHeader,
          headerStyle: { padding: 0 },
          header: () => (
            <View style={{ marginTop: 32 }}>
              <View
                style={{
                  padding: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "800" }} variant="headlineMedium">
                  Welcome to Asterisk
                </Text>
                <Pressable
                  onPress={() => setShowHeader(false)}
                  style={{
                    borderRadius: 16,
                    backgroundColor: "#BCC6E0",
                    width: 30,
                    height: 30,
                    alignSelf: "flex-end",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <XIcon size={16} color={colors.onBackground} />
                </Pressable>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  backgroundColor: "#EDF1FF",
                  padding: 16,
                }}
              >
                <Pressable
                  android_ripple={{
                    radius: 20,
                    color: "#ddd",
                  }}
                  style={{
                    backgroundColor: "#DAE3F9",
                    borderWidth: 2,
                    borderColor: "#BCC6E0",
                    borderRadius: 20,
                    // width: "100%",
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    height: 50,
                  }}
                >
                  <Text variant="titleMedium">Login</Text>
                </Pressable>
                <Pressable
                  android_ripple={{
                    radius: 20,
                    color: "#ddd",
                  }}
                  style={{
                    backgroundColor: "#003eed",
                    borderRadius: 20,
                    // width: "100%",
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    height: 50,
                  }}
                >
                  <Text variant="titleMedium" style={{ color: "#fff" }}>
                    Sign Up
                  </Text>
                </Pressable>
              </View>
            </View>
          ),
          tabBarIcon: ({ color, focused, size }) => (
            <Home size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: true,
          header: () => (
            <SafeAreaView style={{ backgroundColor: "#fff" }}>
              <ThemedView style={{ padding: 16, paddingTop: 24 }}>
                <Text
                  variant="headlineMedium"
                  style={{ fontWeight: "800", marginBottom: 12 }}
                >
                  Explore
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 18,
                    gap: 8,
                    borderRadius: 16,
                    backgroundColor: "#eee",
                  }}
                >
                  <Search size={18} color={"#999"} />
                  <TextInput
                    style={{
                      paddingRight: 18,
                      paddingVertical: 6,
                      fontSize: 16,
                      flex: 1,
                    }}
                    placeholder="Search"
                  />
                </View>
              </ThemedView>
            </SafeAreaView>
          ),
          title: "Explore",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              size={28}
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Newpost/newpost"
        options={{
          tabBarStyle: {
            display: "none",
          },
          title: "New Post",
          tabBarShowLabel: false,
          headerShown: true,
          header: ({ navigation }) => {
            return (
              <SafeAreaView style={{ backgroundColor: "#fff" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    alignContent: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignContent: "center",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Pressable onPress={() => navigation.goBack()}>
                      <X size={26} color={"#000"} />
                    </Pressable>
                    <Text variant="titleLarge" style={{ fontWeight: "700" }}>
                      New post
                    </Text>
                  </View>
                  <Pressable>
                    <EllipsisIcon size={20} color={"#000"} />
                  </Pressable>
                </View>
              </SafeAreaView>
            );
          },
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={{
                paddingHorizontal: 18,
                paddingVertical: 8,
                borderRadius: 14,
                backgroundColor: "#eee",
                borderWidth: 2,
                borderColor: focused ? "#ddd" : "transparent",
              }}
            >
              <Plus size={24} color={"#222"} />
            </View>
            // </View>
          ),
        }}
      />

      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              size={28}
              name={focused ? "chatbubble" : "chatbubble-outline"}
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
          tabBarIcon: ({ color, focused, size }) =>
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
                  source={{ uri: currentUser.profilePicture }}
                  style={{ width: 36, height: 36 }}
                />
              </View>
            ) : (
              <Icon
                size={28}
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
        }}
      />
    </Tabs>
  );
}
