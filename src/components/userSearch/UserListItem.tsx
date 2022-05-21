import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { IUser } from "../../types/models";
import { useNavigation } from "@react-navigation/native";

interface IUserListItem {
  user: IUser;
}

const UserListItem: React.FC<IUserListItem> = ({ user }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      // @ts-ignore
      onPress={() => navigation.navigate("UserProfile", { userId: user.id })}
      style={styles.container}
    >
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <View>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  name: {
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default UserListItem;
