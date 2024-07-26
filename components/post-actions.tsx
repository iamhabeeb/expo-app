import { Bookmark, Heart, MessageCircle, Repeat } from "lucide-react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";

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

export default PostActions;
