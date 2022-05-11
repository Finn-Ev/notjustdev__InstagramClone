import { Image, SafeAreaView } from "react-native";
import user from "../../assets/data/user.json";
import FeedGridView from "../components/feed/FeedGridView";

import ProfileHeader from "../components/profile/ProfileHeader";

interface IProfile {}

const ProfileScreen: React.FC<IProfile> = ({}) => {
  return (
    <SafeAreaView>
      <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
