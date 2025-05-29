import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_0_542)'];

const IconWhitepaper = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 5h-4a4 4 0 00-4 4V8a3 3 0 00-3-3H4v13h4l1.222.204c1.134.189 2.14.839 2.778 1.796a4.161 4.161 0 012.778-1.796L16 18h4V5z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_542"
          x1="20"
          y1="12.759"
          x2="4"
          y2="12.759"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9EE6FC" />
          <Stop offset="1" stopColor="#EBB9E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconWhitepaper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWhitepaper;
