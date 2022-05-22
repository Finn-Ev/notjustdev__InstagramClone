import { Image, SafeAreaView, Text } from "react-native";
import user from "../../assets/data/user.json";
import FeedGridView from "../components/feed/FeedGridView";

import ProfileHeader from "../components/profile/ProfileHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  MyProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
} from "../navigation/types";

interface IProfile {}

const ProfileScreen: React.FC<IProfile> = ({}) => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();

  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();
  return (
    <SafeAreaView>
      <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
