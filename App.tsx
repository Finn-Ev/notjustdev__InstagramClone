import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App: React.FC = ({}) => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
