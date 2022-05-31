import { StyleSheet, View, Text, Image } from "react-native";
import fonts from "../../theme/fonts";
import Button from "../shared/Button";
import { useNavigation } from "@react-navigation/native";
import { ProfileNavigationProp } from "../../navigation/types";
import { Auth } from "aws-amplify";
import { User } from "../../API";
import { DEFAULT_USER_IMAGE } from "../../config";
import { useAuthContext } from "../../context/AuthContext";

interface IProfileHeader {
  user: User;
}

const ProfileHeader: React.FC<IProfileHeader> = ({ user }) => {
  const navigation = useNavigation<ProfileNavigationProp>();
  const { userId: authUserId } = useAuthContext();

  return (
    <View style={styles.container}>
      {/* Username */}
      <Text style={styles.username}>{user.username}</Text>

      <View style={styles.headerRow}>
        {/* Profile Image */}
        <Image
          source={{ uri: user.image || DEFAULT_USER_IMAGE }}
          style={styles.avatar}
        />

        {/* Posts, Follower and Following Stats */}
        <View style={styles.userStats}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{user.nofPosts}</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{user.nofFollowers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{user.nofFollowings}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      {/* Name and Bio */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* Buttons */}
      {authUserId === user.id && (
        <View style={styles.buttonContainer}>
          <Button
            inline
            onPress={() =>
              navigation.navigate("EditProfile", { userId: authUserId })
            }
          >
            Edit Profile
          </Button>
          <Button inline onPress={() => Auth.signOut()}>
            Sign out
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  username: {
    marginBottom: 10,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: "33.33%",
    aspectRatio: 1,
    borderRadius: 50,
  },
  userStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "66.66%",
  },
  numberContainer: {
    alignItems: "center",
    width: 75,
  },
  numberText: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
  },
  infoContainer: {
    marginTop: 10,
  },
  name: {
    fontWeight: fonts.weight.bold,
  },
  bio: {},
  buttonContainer: {
    flexDirection: "row",
  },
});

export default ProfileHeader;
