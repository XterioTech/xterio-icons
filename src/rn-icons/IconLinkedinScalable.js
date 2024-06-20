import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_1_464)'];

const IconLinkedinScalable = props => {
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
        d="M20 5.176v13.647A1.176 1.176 0 0118.823 20H5.176A1.176 1.176 0 014 18.823V5.176A1.176 1.176 0 015.176 4h13.647A1.176 1.176 0 0120 5.176zM8.706 10.118H6.353v7.53h2.353v-7.53zm.212-2.589a1.355 1.355 0 00-1.346-1.364h-.043a1.365 1.365 0 100 2.73 1.355 1.355 0 001.389-1.323v-.043zm8.73 5.544c0-2.264-1.44-3.144-2.871-3.144a2.682 2.682 0 00-2.382 1.214h-.066v-1.025h-2.211v7.53h2.353v-4.006a1.562 1.562 0 011.411-1.684h.09c.748 0 1.303.47 1.303 1.656v4.033h2.353l.02-4.574z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_464"
          x1="4"
          y1="12.276"
          x2="20"
          y2="12.276"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9EE6FC" />
          <Stop offset="1" stopColor="#EBB9E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconLinkedinScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLinkedinScalable;
