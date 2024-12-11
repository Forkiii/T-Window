
import React from 'react';
import { Mask, Path, Svg } from 'react-native-svg';

const Line = () => (
<Svg width="311" height="35" viewBox="0 0 311 35" fill="none">
    <Mask id="path-1-inside-1_174_11" fill="white">
      <Path d="M0.874512 0H310.875V35H0.874512V0Z" />
    </Mask>
    <Path
      d="M310.875 34H0.874512V36H310.875V34Z"
      fill="#D96837"
      mask="url(#path-1-inside-1_174_11)"
    />
  </Svg>
);

export default Line;
