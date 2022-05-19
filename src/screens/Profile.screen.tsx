import { Image, SafeAreaView } from "react-native";
import user from "../../assets/data/user.json";
import FeedGridView from "../components/feed/FeedGridView";

import ProfileHeader from "../components/profile/ProfileHeader";
import { useRoute } from "@react-navigation/native";

interface IProfile {}

const ProfileScreen: React.FC<IProfile> = ({}) => {
  const user_ = useRoute().params?.user;
  console.log(user_);
  return (
    <SafeAreaView>
      <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
