import NativeSlider, {SliderProps} from '@react-native-community/slider';
import React from 'react';

const baseStyle = {
  width: '100%',
};

const Slider = ({style, ...props}: SliderProps) => (
  <NativeSlider {...props} style={{...baseStyle, ...style}} />
);

export default Slider;
