import { View } from 'react-native';
import Comments from './src/screens/Comments.screen';
import HomeScreen from './src/screens/Home.screen';

const App: React.FC = ({}) => {
  return (
    <View style={{ marginTop: 50 }}>
      <HomeScreen />
      {/* <Comments /> */}
    </View>
  );
};

export default App;
