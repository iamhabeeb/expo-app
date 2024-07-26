import React, { useState, useRef, useCallback } from "react";
import { Pressable, StyleSheet, Dimensions, ViewToken } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { VolumeX, Volume2, Play, Pause } from "lucide-react-native";
import { PostType } from "@/utils/th";

type PlayVideoProps = {
  source: string;
  original_width: number;
  viewablePosts?: {
    viewableItems: ViewToken<PostType>[];
    changed: ViewToken<PostType>[];
  } | null;
  original_height: number;
  id: string;
};

const PlayVideo: React.FC<PlayVideoProps> = React.memo(
  ({ source, original_width, original_height, viewablePosts, id }) => {
    const video = useRef<Video>(null);
    const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
    const [mute, setMute] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMute = useCallback(async () => {
      if (video.current) {
        await video.current.setIsMutedAsync(!mute);
        setMute((prevMute) => !prevMute);
      }
    }, [mute]);

    const togglePlayPause = useCallback(async () => {
      try {
        if (video.current) {
          if (isPlaying) {
            await video.current.pauseAsync();
          } else {
            await video.current.playAsync();
          }
          setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        }
      } catch (error) {
        console.error("ERROR PAUSING VIDEO", error);
      }
    }, [isPlaying]);

    const handleLongPress = useCallback(async () => {
      console.log("long pressed");
      if (video.current && isPlaying) {
        await video.current.pauseAsync();
        console.log("PAUSED");
      }
    }, [isPlaying]);

    const handlePressOut = useCallback(async () => {
      console.log("pressed out");
      if (video.current && isPlaying) {
        await video.current.playAsync();
        console.log("Play back on");
      }
    }, [isPlaying]);

    // const videoStyle = {
    //   width: "100%",
    //   height: "100%",
    //   borderRadius: 12,
    // };

    return (
      <Pressable
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
        style={styles.container}
      >
        <Video
          ref={video}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 12,
          }}
          useNativeControls={true}
          source={{
            uri: source,
          }}
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={setStatus}
          isMuted={mute}
        />
        <Pressable style={styles.bottomRightButton} onPress={toggleMute}>
          {mute ? (
            <VolumeX size={18} color="#fff" />
          ) : (
            <Volume2 size={18} color="#fff" />
          )}
        </Pressable>
        <Pressable style={styles.bottomLeftButton} onPress={togglePlayPause}>
          {isPlaying ? (
            <Pause size={18} fill={"#fff"} color="#fff" />
          ) : (
            <Play size={18} fill={"#fff"} color="#fff" />
          )}
        </Pressable>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 16,
    marginRight: 12,
  },
  fullScreenContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
    zIndex: 1000,
  },
  fullScreenVideo: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  topRightButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(39, 45, 54, 0.38)",
    padding: 8,
    borderRadius: 20,
  },
  bottomRightButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(39, 45, 54, 0.38)",
    padding: 8,
    borderRadius: 20,
  },
  bottomLeftButton: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(39, 45, 54, 0.38)",
    padding: 8,
    borderRadius: 20,
  },
});

export default PlayVideo;
