import { Video } from 'expo-av';
import { useRef } from 'react';
import { StyleSheet } from 'react-native';

interface IVideoPlayer {
  uri: string;
}

const VideoPlayer: React.FC<IVideoPlayer> = ({ uri }) => {
  const video = useRef(null);
  return (
    <Video
      useNativeControls
      resizeMode="contain"
      isLooping
      ref={video}
      source={{ uri }}
      style={styles.video}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default VideoPlayer;
