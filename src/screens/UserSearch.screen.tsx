import { FlatList, StyleSheet } from "react-native";

// @ts-ignore
import users from "../../assets/data/users.json";
import UserListItem from "../components/userSearch/UserListItem";

interface IUserSearch {}

const UserSearch: React.FC<IUserSearch> = ({}) => {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <UserListItem user={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default UserSearch;
