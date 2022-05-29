import { useEffect, useRef, useState } from "react";
import { FlatList, View, ViewToken } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import FeedPost from "../components/feed/FeedPost";
import { Post } from "../API";

interface IHomeScreen {}
{
}

const FeedScreen: React.FC<IHomeScreen> = (props) => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const [posts, setPosts] = useState<Post[]>([]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id || 0);
      }
    }
  );
  useEffect(() => {
    (async () => {
      const response = await API.graphql(graphqlOperation(listPosts));
      // @ts-ignore
      setPosts(response.data.listPosts.items);
    })();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <FeedPost isVisible={activePostId === item.id} post={item} />
        )}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 66 }}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default FeedScreen;

const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          name
          username
          image
        }
        Comments {
          items {
            id
            text
            User {
              username
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
