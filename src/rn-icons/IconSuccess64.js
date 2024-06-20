import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg';

const IconSuccess64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      {...otherProps}
    >
      <Svg
        width="64"
        height="64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="32" cy="32" r="24" fill="url(#paint0_linear_1_542)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.535 26L29 41.535 19.465 32 23 28.465l6 6 12-12L44.535 26z"
          fill="#0A1161"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_1_542"
            x1="8"
            y1="32.828"
            x2="56"
            y2="32.828"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9EE6FC" />
            <Stop offset="1" stopColor="#EBB9E7" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconSuccess64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSuccess64;
