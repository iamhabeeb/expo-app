import { Asterisk } from "lucide-react-native";
import { View } from "react-native";
import { SharedValue } from "react-native-reanimated";

const HeadLogo = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Asterisk size={64} color={"#000"} style={{}} />
    </View>
  );
};

export default HeadLogo;
