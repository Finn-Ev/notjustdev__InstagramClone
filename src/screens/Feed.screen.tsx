import { useRef, useState } from "react";
import { ActivityIndicator, FlatList, View, ViewToken } from "react-native";
import FeedPost from "../components/feed/FeedPost";
import { gql, useQuery } from "@apollo/client";
import { ListPostsQuery, ListPostsQueryVariables, Post } from "../API";
import ApiErrorMessage from "../components/shared/ApiErrorMessage";

interface IHomeScreen {}

const FeedScreen: React.FC<IHomeScreen> = (props) => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const { data, loading, error } = useQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts, {});

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id || 0);
      }
    }
  );

  if (loading) return <ActivityIndicator />;
  if (error)
    return (
      <ApiErrorMessage title={"Error fetching posts"} message={error.message} />
    );

  const posts = data?.listPosts?.items || [];

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) =>
          item && (
            <FeedPost
              isVisible={activePostId === item.id}
              post={item as Post}
            />
          )
        }
        showsVerticalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 66 }}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default FeedScreen;

// GraphQL query
const listPosts = gql`
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
