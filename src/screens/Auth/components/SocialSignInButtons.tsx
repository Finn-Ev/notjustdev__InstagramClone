import React from "react";
import CustomButton from "./CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };

  const onSignInApple = () => {
    console.warn("onSignInApple");
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#4765A9"
        fgColor="#fff"
        icon={<AntDesign color={"#fff"} size={20} name={"facebook-square"} />}
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#DD4D44"
        fgColor="#fff"
        icon={<AntDesign color={"#fff"} size={20} name={"google"} />}
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#000"
        fgColor="#fff"
        icon={<AntDesign color={"#fff"} size={18} name={"apple1"} />}
      />
    </>
  );
};

export default SocialSignInButtons;
