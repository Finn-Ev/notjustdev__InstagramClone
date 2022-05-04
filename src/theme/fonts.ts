import {TextStyle} from 'react-native';

const size = {
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

const weight: {[key in keyof typeof fontWeights]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

enum fontWeights {
  full,
  semi,
  bold,
  normal,
  thin,
}

const fonts = {size, weight}; // for better auto import

export default fonts;
