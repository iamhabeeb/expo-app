import { ThemedView } from "@/components/ThemedView";
import PostItem from "@/components/post-item";
import ProfileHeader from "@/components/profile-header";
import { currentUser } from "@/utils/mockAuth";
import { postData } from "@/utils/new-data";
import { PostType } from "@/utils/th";
import { UserType, users } from "@/utils/user";
import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const ProfileScreen = (props: Props) => {
  const posts = postData.filter((p) => currentUser.posts.includes(p.id));

  const keyExtractor = (item: PostType) => item.id + "_POST-ITEM";

  const renderItems = useCallback(
    ({ item }: { item: PostType; index: number }) => {
      const user = currentUser;
      return <PostItem item={item} user={user as UserType} />;
    },
    []
  );

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            data={posts}
            ListHeaderComponent={() => (
              <View
                style={{ borderBottomWidth: 0.2, borderBottomColor: "#ccc" }}
              >
                <ProfileHeader />
                <Text
                  variant="titleLarge"
                  style={{ fontWeight: "700", padding: 16 }}
                >
                  Posts
                </Text>
              </View>
            )}
            keyExtractor={keyExtractor}
            renderItem={renderItems}
            contentContainerStyle={{
              paddingBottom: 16,
            }}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
