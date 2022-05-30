import { ComponentType, ReactElement } from "react";
import { FlatList, View } from "react-native";
import { Post } from "../../API";
import FeedGridItem from "./FeedGridItem";

interface IFeedGridView {
  data: (Post | null)[];
  ListHeaderComponent?: ComponentType<any> | ReactElement | null | undefined;
  onRefresh?: () => void;
  refreshing?: boolean;
}

const FeedGridView: React.FC<IFeedGridView> = ({
  data,
  ListHeaderComponent = <View />,
  refreshing = false,
  onRefresh,
}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => item && <FeedGridItem post={item} />}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        style={{ marginLeft: -1, marginRight: -1 }} // eliminates the padding on the sides of the list
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

export default FeedGridView;
