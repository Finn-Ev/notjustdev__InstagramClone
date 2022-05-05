import { SafeAreaView } from 'react-native';
import Comments from './src/screens/Comments.screen';
import HomeScreen from './src/screens/Home.screen';

const App: React.FC = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HomeScreen /> */}
      <Comments />
    </SafeAreaView>
  );
};

export default App;
