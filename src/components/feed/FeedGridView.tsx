import { ComponentType, ReactElement } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { IPost } from "../../types/models";
import FeedGridItem from "./FeedGridItem";

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?: ComponentType<any> | ReactElement | null | undefined;
}

const FeedGridView: React.FC<IFeedGridView> = ({
  data,
  ListHeaderComponent = <View />,
}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <FeedGridItem post={item} />}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        style={{ marginLeft: -1, marginRight: -1 }} // eliminates the padding on the sides of the list
      />
    </View>
  );
};

export default FeedGridView;
