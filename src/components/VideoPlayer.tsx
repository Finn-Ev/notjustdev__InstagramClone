import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import colors from '../theme/colors';

interface IVideoPlayer {
  uri: string;
  isVisible: boolean;
}

const VideoPlayer: React.FC<IVideoPlayer> = ({ uri, isVisible }) => {
  const video = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  return (
    <View style={{ position: 'relative' }}>
      <Pressable style={styles.muteButton} onPress={() => setIsMuted(v => !v)}>
        <Ionicons
          color={colors.white}
          name={isMuted ? 'volume-mute' : 'volume-high'}
          size={20}
        />
      </Pressable>
      <Video
        // useNativeControls
        resizeMode="cover"
        isLooping
        // shouldPlay={isVisible}
        shouldPlay={false}
        ref={video}
        source={{ uri }}
        isMuted={isMuted}
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 100,
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 9999,
  },
});

export default VideoPlayer;
