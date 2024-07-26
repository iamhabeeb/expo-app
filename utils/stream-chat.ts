import { StreamChat } from "stream-chat";

export const client = StreamChat.getInstance(process.env.STREAM_APIKEY!);

export const channel = client.channel("messaging", {
  members: ["user123", "user002"],
  name: "The Park",
});
