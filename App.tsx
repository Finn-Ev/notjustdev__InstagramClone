import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);

const App: React.FC = ({}) => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
