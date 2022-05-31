import { FlatList } from "react-native";

import UserListItem from "../components/userSearch/UserListItem";
import { gql, useQuery } from "@apollo/client";
import LoadingIndicator from "../components/shared/LoadingIndicator";
import ApiErrorMessage from "../components/shared/ApiErrorMessage";
import { ListUsersQuery, ListUsersQueryVariables, User } from "../API";

interface IUserSearch {}

const UserSearch: React.FC<IUserSearch> = ({}) => {
  const { data, loading, error, refetch } = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(listUsers);

  if (loading) return <LoadingIndicator />;
  if (error) return <ApiErrorMessage message={error.message} />;

  const users = (data?.listUsers?.items ?? []).filter(
    (user) => !user?._deleted
  );

  return (
    <FlatList
      data={users}
      onRefresh={() => refetch()}
      refreshing={loading}
      renderItem={({ item }) => {
        return item && <UserListItem user={item as User} />;
      }}
    />
  );
};

export default UserSearch;

const listUsers = gql`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        image
      }
    }
  }
`;
