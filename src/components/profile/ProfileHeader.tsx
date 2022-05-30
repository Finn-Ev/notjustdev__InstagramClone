import { StyleSheet, View, Text, Image } from "react-native";
import fonts from "../../theme/fonts";
import user from "../../../assets/data/user.json";
import Button from "../shared/Button";
import { useNavigation } from "@react-navigation/native";
import { ProfileNavigationProp } from "../../types/navigation";
import { Auth } from "aws-amplify";

interface IProfileHeader {}

const ProfileHeader: React.FC<IProfileHeader> = ({}) => {
  const navigation = useNavigation<ProfileNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Username */}
      <Text style={styles.username}>{user.username}</Text>

      <View style={styles.headerRow}>
        {/* Profile Image */}
        <Image source={{ uri: user.image }} style={styles.avatar} />

        {/* Posts, Follower and Following Stats */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>12</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>244</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>172</Text>
          <Text>Following</Text>
        </View>
      </View>

      {/* Name and Bio */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button inline onPress={() => navigation.navigate("EditProfile")}>
          Edit Profile
        </Button>
        <Button inline onPress={() => Auth.signOut()}>
          Sign out
        </Button>
      </View>
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
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContainer: {
    alignItems: "center",
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
