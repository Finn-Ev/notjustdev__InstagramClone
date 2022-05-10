import { SafeAreaView } from "react-native";
import CommentsScreen from "./src/screens/Comments.screen";
import EditProfileScreen from "./src/screens/EditProfile.screen";
import HomeScreen from "./src/screens/Home.screen";
import Profile from "./src/screens/Profile.screen";
import PostUploadScreen from "./src/screens/PostUpload.screen";
import colors from "./src/theme/colors";

const App: React.FC = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      {/* <HomeScreen /> */}
      {/* <Comments /> */}
      {/* <Profile /> */}
      {/*<EditProfileScreen />*/}
      <PostUploadScreen />
    </SafeAreaView>
  );
};

export default App;
