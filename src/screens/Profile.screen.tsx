import { SafeAreaView } from "react-native";
import FeedGridView from "../components/feed/FeedGridView";

import ProfileHeader from "../components/profile/ProfileHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  MyProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
} from "../navigation/types";
import { gql, useQuery } from "@apollo/client";
import { GetUserQuery, GetUserQueryVariables, Post, User } from "../API";
import ApiErrorMessage from "../components/shared/ApiErrorMessage";
import { useAuthContext } from "../context/AuthContext";
import LoadingIndicator from "../components/shared/LoadingIndicator";

interface IProfile {}

const ProfileScreen: React.FC<IProfile> = ({}) => {
  const { userId: authUserID } = useAuthContext();
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();

  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const { data, loading, error, refetch } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(getUser, {
    variables: {
      id: route?.params?.userId || authUserID,
    },
  });

  const user = data?.getUser;

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error || !user) {
    return (
      <ApiErrorMessage
        message={error?.message ?? "User not found"}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <SafeAreaView>
      <FeedGridView
        data={(user.Posts?.items as Post[]) || []}
        ListHeaderComponent={() => <ProfileHeader user={user as User} />}
        refreshing={loading}
        onRefresh={() => refetch()}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      username
      image
      website
      nofPosts
      nofFollowers
      nofFollowings
      bio
      Posts {
        items {
          id
          image
          images
          video
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
