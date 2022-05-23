import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import AuthContextProvider from "./src/context/AuthContext";

Amplify.configure(config);

const App: React.FC = ({}) => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
