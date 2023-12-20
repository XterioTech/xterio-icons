import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_960_168)'];

const IconTwitterScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        d="M13.332 11.102l5.212-6.058h-1.235l-4.526 5.26-3.614-5.26H5l5.466 7.955L5 19.352h1.235l4.78-5.556 3.816 5.556H19l-5.668-8.25zM11.64 13.07l-.554-.793L6.68 5.975h1.897l3.556 5.086.554.792 4.622 6.612h-1.897L11.64 13.07z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_960_168"
          x1="5"
          y1="12.444"
          x2="19"
          y2="12.444"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9EE6FC" />
          <Stop offset="1" stopColor="#EBB9E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconTwitterScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTwitterScalable;
