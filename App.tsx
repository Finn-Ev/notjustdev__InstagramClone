import { ScrollView, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = ({}) => {
  return (
    <View style={{ marginTop: 50 }}>
      <HomeScreen />
    </View>
  );
};

export default App;
