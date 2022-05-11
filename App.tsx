import { SafeAreaView } from "react-native";
import CommentsScreen from "./src/screens/Comments.screen";
import EditProfileScreen from "./src/screens/EditProfile.screen";
import FeedScreen from "./src/screens/Feed.screen";
import Profile from "./src/screens/Profile.screen";
import PostUploadScreen from "./src/screens/PostUpload.screen";
import colors from "./src/theme/colors";

import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";

const App: React.FC = ({}) => {
  return <Navigation />;
};

export default App;
