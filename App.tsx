import { SafeAreaView } from 'react-native';
import CommentsScreen from './src/screens/Comments.screen';
import EditProfileScreen from './src/screens/EditProfile.screen';
import HomeScreen from './src/screens/Home.screen';
import Profile from './src/screens/Profile.screen';

const App: React.FC = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HomeScreen /> */}
      {/* <Comments /> */}
      {/* <Profile /> */}
      <EditProfileScreen />
    </SafeAreaView>
  );
};

export default App;
