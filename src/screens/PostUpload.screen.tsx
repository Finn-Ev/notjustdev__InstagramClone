import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Camera } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../theme/colors";
import { FlashMode } from "expo-camera/build/Camera.types";

interface IPostUploadScreen {}

const PostUploadScreen: React.FC<IPostUploadScreen> = ({}) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const [cameraType, setCameraType] = useState<
    keyof typeof Camera.Constants.Type
  >(Camera.Constants.Type.back);

  const [flashMode, setFlashMode] = useState<keyof typeof FlashMode>(
    FlashMode.off
  );

  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === "granted" &&
          microphonePermission.status === "granted"
      );
    })();
  }, []);

  const cameraRef = useRef<Camera>(null);

  const flipCamera = () => {
    setCameraType((currentCameraType) =>
      currentCameraType === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front
    );
  };

  const toggleFlashMode = () => {
    setFlashMode((currentFlashMode) =>
      currentFlashMode === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  };

  const takePicture = async () => {
    if (isCameraReady && cameraRef.current && !isRecording) {
      const result = await cameraRef.current.takePictureAsync({
        // base64: true,
        quality: 0.75,
        skipProcessing: true,
      });
    }
  };

  const startRecording = async () => {
    if (isCameraReady && cameraRef.current && !isRecording) {
      setIsRecording(true);
      try {
        const result = await cameraRef.current.recordAsync({
          quality: Camera.Constants.VideoQuality["640:480"],
          maxDuration: 60,
          maxFileSize: 1024 * 1024 * 10,
          mute: false,
        });
      } catch (e) {
        setIsRecording(false);
      }
    }
  };

  const stopRecording = async () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (hasPermission === null) {
    return <ActivityIndicator />;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={[styles.camera]}
        type={cameraType}
        flashMode={flashMode}
        onCameraReady={() => setIsCameraReady(true)}
        ref={cameraRef}
        // ratio={"4:3"}
      />
      <View style={[styles.buttonContainer, { top: 60 }]}>
        <MaterialIcons name={"settings"} size={30} color={colors.white} />
        <Pressable onPress={toggleFlashMode} hitSlop={16}>
          <MaterialIcons
            name={flashMode === FlashMode.off ? "flash-off" : "flash-on"}
            size={30}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons name={"close"} size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonContainer, { bottom: 40 }]}>
        <MaterialIcons name={"photo-library"} size={30} color={colors.white} />
        <Pressable
          onPress={takePicture}
          hitSlop={16}
          onLongPress={startRecording}
          onPressOut={stopRecording}
        >
          <View
            style={[
              styles.shutterCircle,
              isRecording && { backgroundColor: colors.accent },
            ]}
          />
        </Pressable>
        <Pressable onPress={flipCamera}>
          <MaterialIcons
            name={"flip-camera-ios"}
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    position: "absolute",
    top: 0,
    height: "80%",
    width: "100%",
    // aspectRatio: 3 / 4,
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  shutterCircle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
});

export default PostUploadScreen;
