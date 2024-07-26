import { MediaType } from "@/utils/th";
import { ResizeMode, Video } from "expo-av";
import { memo, useRef, useState } from "react";
import { FlatList, Image, ListRenderItem, View } from "react-native";

const PostMedia = ({ item }: { item: MediaType[] }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const MemoizedMedia = memo(
    ({ item, index }: { item: MediaType; index: number }) => {
      if (item.type === "image") {
        return (
          <View
            style={{
              width: 280,
              height: 280,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              borderRadius: 28,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 28,
              }}
              source={{
                uri: item.sourceUrl,
              }}
            />
          </View>
        );
      }
      if (item.type === "video") {
        return (
          <View
            style={{
              width: 280,
              height: 280,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              borderRadius: 28,
            }}
          >
            {/* <Video
              ref={video}
              source={{
                uri: "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/videos/rc04.mp4",
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              onError={(e) => console.error("ERROR PLAYING VIDEO", e)}
            /> */}
          </View>
        );
      }
    }
  );

  const renderMedia: ListRenderItem<MediaType> = ({ item, index }) => (
    <MemoizedMedia item={item} index={index} />
  );

  return (
    <FlatList
      horizontal
      data={item}
      contentContainerStyle={{
        paddingLeft: 68,
      }}
      scrollEnabled={true}
      keyExtractor={(e) => e.id}
      renderItem={renderMedia}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PostMedia;
