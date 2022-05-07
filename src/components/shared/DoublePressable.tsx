import { Pressable } from 'react-native';

interface IDoublePressable {
  onDoublePress: () => void;
  interval?: number;
}

const DoublePressable: React.FC<IDoublePressable> = ({
  onDoublePress,
  children,
  interval = 300,
}) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < interval) {
      onDoublePress();
    }
    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
