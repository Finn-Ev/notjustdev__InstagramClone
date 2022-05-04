import { StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  useWindowDimensions,
  View,
  ViewToken,
} from 'react-native';
import colors from '../theme/colors';
import DoublePressable from './util/DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel: React.FC<ICarousel> = ({
  images,
  onDoublePress = () => {},
}) => {
  const { width } = useWindowDimensions();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    }
  );

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DoublePressable onDoublePress={() => onDoublePress()}>
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        viewabilityConfig={{
          itemVisiblePercentThreshold: 51,
        }}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: activeImageIndex === index ? '#0095f6' : 'grey',
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -25,
    width: '100%',
  },
  dot: {
    width: 7,
    aspectRatio: 1,
    borderRadius: 10,
    borderColor: colors.black,
    marginHorizontal: 4,
  },
});

export default Carousel;
