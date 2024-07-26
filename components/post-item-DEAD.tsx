import React, { ReactNode, useCallback, useMemo } from "react";
import {
  View,
  Image,
  Pressable,
  FlatList,
  ImageSourcePropType,
  ViewToken,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import {
  EllipsisVertical,
  Heart,
  MessageCircle,
  Repeat,
  Bookmark,
  HeartIcon,
  MessageCircleIcon,
  RefreshCcw,
} from "lucide-react-native";
import { formatChatTime } from "@/utils/timeFormater";
import PlayVideo from "./feed-video";
import { CarouselMedia, PostB, VideoItem } from "@/utils/th";
import { StyleSheet } from "react-native";

const PostItem = React.memo(
  ({
    item,
    user,
    viewablePosts,
  }: {
    item: PostB;
    user: User | null;
    viewablePosts: {
      viewableItems: ViewToken<PostB>[];
      changed: ViewToken<PostB>[];
    } | null;
  }) => {
    const { colors } = useTheme();

    const renderImage = useCallback(
      ({ item: imageItem }: { item: CarouselMedia }) => (
        <Image
          style={styles.image}
          source={imageItem.image?.sourceUrl as ImageSourcePropType}
        />
      ),
      []
    );

    const renderVideo = useCallback(
      ({ item: videoItem }: { item: VideoItem }) => (
        <PlayVideo
          source={require("@/assets/videos/rc06.mp4")}
          original_width={videoItem.original_width}
          original_height={videoItem.original_height}
          viewablePosts={viewablePosts}
          id={item.id}
          key={item.id}
        />
      ),
      [viewablePosts, item.id]
    );

    const PostActions = useMemo(
      () => (
        <View style={styles.actionsContainer}>
          <View style={styles.leftActions}>
            <ActionButton
              Icon={
                <HeartIcon
                  size={24}
                  color={colors.onBackground}
                  strokeWidth={1.3}
                />
              }
              count="12.4k"
            />
            <ActionButton
              Icon={
                <MessageCircleIcon
                  size={24}
                  color={colors.onBackground}
                  strokeWidth={1.3}
                />
              }
              count="102"
            />
            <ActionButton
              Icon={
                <RefreshCcw
                  size={24}
                  color={colors.onBackground}
                  strokeWidth={1.3}
                />
              }
              count="200"
            />
          </View>
          <Pressable>
            <Bookmark strokeWidth={1.3} size={24} color="#999" />
          </Pressable>
        </View>
      ),
      []
    );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={user?.profilePicture}
              style={styles.profilePicture}
            />
            <View style={styles.nameTimeContainer}>
              <Text variant="titleMedium">{user?.username}</Text>
              <Text variant="bodyMedium">{formatChatTime(item.createdAt)}</Text>
            </View>
          </View>
          <Pressable>
            <EllipsisVertical size={18} color={colors.onBackground} />
          </Pressable>
        </View>

        <View style={styles.captionContainer}>
          <Text variant="bodyMedium">
            {item.caption?.plainText || "Wassup"}
          </Text>
        </View>

        {item.image && <PostImage image={item.image} />}

        {item.carouselMedia && (
          <FlatList
            horizontal
            data={item.carouselMedia}
            renderItem={renderImage}
            keyExtractor={(item, index) => `carousel-${index}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          />
        )}

        {item.video && (
          <FlatList
            horizontal
            pagingEnabled
            data={item.video}
            renderItem={renderVideo}
            keyExtractor={(item, index) => `video-${index}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.videoContainer}
          />
        )}

        {PostActions}
      </View>
    );
  }
);

const ActionButton = React.memo(
  ({ Icon, count }: { Icon: ReactNode; count: string }) => (
    <View style={styles.actionButton}>
      {Icon}
      <Text style={styles.actionCount}>{count}</Text>
    </View>
  )
);

const PostImage = React.memo(({ image }: { image: ImageType[] }) => (
  <FlatList
    data={image}
    renderItem={({ item }) => (
      <Image
        style={[
          styles.image,
          {
            width: item.original_width / 4,
            height: item.original_height / 4,
          },
        ]}
        source={item.sourceUrl as ImageSourcePropType}
      />
    )}
    keyExtractor={(item, index) => `image-${index}`}
  />
));

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    gap: 24,
  },
  header: {
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  profilePicture: {
    width: 44,
    height: 44,
    borderRadius: 100,
  },
  nameTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 8,
  },
  captionContainer: {
    paddingLeft: 54,
    paddingRight: 10,
    gap: 24,
  },
  image: {
    borderRadius: 18,
  },
  carouselContainer: {
    paddingLeft: 64,
    flexDirection: "row",
    gap: 12,
    paddingRight: 12,
  },
  videoContainer: {
    paddingLeft: 64,
    flexDirection: "row",
    gap: 12,
    paddingRight: 12,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 64,
    paddingRight: 14,
  },
  leftActions: {
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  actionCount: {
    color: "#999",
  },
});

export default PostItem;
