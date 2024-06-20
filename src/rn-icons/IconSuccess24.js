import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from 'react-native-svg';

const IconSuccess24 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_1_173)">
          <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="url(#paint0_linear_1_173)"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.621 10l-7.06 7.06a1.5 1.5 0 01-2.122 0L5.38 13 7.5 10.879l3 3 6-6L18.621 10z"
            fill="#0A1161"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_1_173"
            x1="0"
            y1="12.414"
            x2="24"
            y2="12.414"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9EE6FC" />
            <Stop offset="1" stopColor="#EBB9E7" />
          </LinearGradient>
          <ClipPath id="clip0_1_173">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconSuccess24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSuccess24;
