import { PostType } from "@/utils/th";
import { UserType, users } from "@/utils/user";
import React, { useCallback } from "react";
import { FlatList } from "react-native";
import PostItem from "./post-item";

type Props = {
  postData: PostType[];
};

const RenderPost = ({ postData }: Props) => {
  const renderItems = useCallback(
    ({ item }: { item: PostType; index: number }) => {
      const user = users.find((user) => user.id === item.user);
      return <PostItem item={item} user={user as UserType} />;
    },
    []
  );

  const keyExtractor = (item: PostType) => item.id + "_POST-ITEM";

  return (
    <FlatList
      scrollEnabled={false}
      data={postData}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
      removeClippedSubviews={true}
      updateCellsBatchingPeriod={50}
      keyExtractor={keyExtractor}
      renderItem={({ index, item }) => renderItems({ index, item })}
    />
  );
};

export default RenderPost;
