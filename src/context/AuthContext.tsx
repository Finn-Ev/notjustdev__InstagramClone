import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth } from "aws-amplify";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Hub } from "aws-amplify";
import { HubCallback } from "@aws-amplify/core";

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(undefined);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setUser(authUser);
      } catch (e) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = (data): void => {
      const { event } = data.payload;
      if (event === "signOut") {
        setUser(null);
      }
    };
    Hub.listen("auth", listener);

    return () => Hub.remove("auth", listener);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
