import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Comments from './src/screens/Comments.screen';
import HomeScreen from './src/screens/Home.screen';

const App: React.FC = ({}) => {
  return (
    <SafeAreaProvider>
      <View style={{ marginTop: 50, flex: 1 }}>
        {/* <HomeScreen /> */}
        <Comments />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
