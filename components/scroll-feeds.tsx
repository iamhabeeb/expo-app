import { threadposts } from "@/utils/eg";
import { formatChatTime } from "@/utils/timeFormater";
import { users } from "@/utils/user";
import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import {
  Bookmark,
  EllipsisVertical,
  Heart,
  MessageCircle,
  Repeat,
} from "lucide-react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";

type Props = {};

const ScrollFeeds = (props: Props) => {
  const { colors } = useTheme();
  return (
    <FlatList
      data={threadposts}
      scrollEnabled={false}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => {
        const user = users.find((user) => user.id === item.user.id);
        return (
          <View
            style={{
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: "#EAEAEA",
              gap: 24,
            }}
          >
            <View
              style={{
                paddingHorizontal: 12,
              }}
            >
              <View
                style={{
                  maxWidth: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <Image
                    source={user?.profilePicture}
                    style={{ width: 44, height: 44, borderRadius: 100 }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 6,
                      gap: 8,
                    }}
                  >
                    <Text variant="titleMedium">{user?.username}</Text>
                    <Text variant="bodyMedium">
                      {formatChatTime(item.createdAt)}
                    </Text>
                  </View>
                </View>

                <Pressable>
                  <EllipsisVertical size={18} color={colors.onBackground} />
                </Pressable>
              </View>
              <View style={{ paddingLeft: 54, paddingRight: 10, gap: 24 }}>
                <Text variant="bodyMedium">
                  {item.caption?.plainText ? item.caption.plainText : "Wassup"}
                </Text>
              </View>
            </View>
            {/* 
            {item.image ? <PostImage image={item.image} /> : null}
            {item.carouselMedia ? (
              <FlatList
                horizontal={true}
                disableScrollViewPanResponder={true}
                data={item.carouselMedia}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: 64,
                  flexDirection: "row",
                  gap: 12,
                  paddingRight: 12,
                }}
                renderItem={({ item }) => {
                  return (
                    <Image
                      style={{
                        width: 300,
                        height: 300,
                        borderRadius: 18,
                      }}
                      source={item.image?.sourceUrl as ImageSourcePropType}
                    />
                  );
                }}
              />
            ) : null} */}
            {/* 
            {item.video ? (
              <View>
                <FlatList
                  data={item.video}
                  renderItem={({ item }) => {
                    return <PlayVideo source={item.sourceUrl} />;
                  }}
                />z
              </View>
            ) : null} */}
            <PostActions />
          </View>
        );
      }}
    />
  );
};

export default ScrollFeeds;
// "https://www.youtube.com/watch?v=6FQsIfE7sZM";

const PostActions = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 64,
        paddingRight: 14,
      }}
    >
      <View style={{ flexDirection: "row", gap: 16 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Heart strokeWidth={1.3} size={24} color={"#999"} />
          <Text style={{ color: "#999" }}>12.4k</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <MessageCircle strokeWidth={1.3} size={24} color={"#999"} />
          <Text style={{ color: "#999" }}>102</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Repeat strokeWidth={1.3} size={24} color={"#999"} />
          <Text style={{ color: "#999" }}>200</Text>
        </View>
      </View>
      <View>
        <Bookmark strokeWidth={1.3} size={24} color={"#999"} />
      </View>
    </View>
  );
};

const PostImage = ({ image }: { image: ImageType[] | null }) => {
  return (
    <View style={{ paddingLeft: 64 }}>
      <FlatList
        data={image}
        renderItem={({ item }) => (
          <Image
            style={{
              width: item.original_width / 3.5,
              height: item.original_height / 3.5,
              borderRadius: 18,
            }}
            source={item.sourceUrl as ImageSourcePropType}
          />
        )}
      />
    </View>
  );
};

const PlayVideo = ({ source }: { source: string }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus | null>(null);

  console.log("STATUS", status);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("@/assets/videos/rc02.mp4")}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        {/* <Button
          title={status?.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
