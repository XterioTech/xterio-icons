import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_0_398)'];

const IconFacebook = props => {
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
        d="M12.78 12.677h2.932l.46-2.977H12.78V8.072c0-1.236.404-2.333 1.561-2.333h1.86V3.14C15.874 3.097 15.183 3 13.877 3c-2.726 0-4.324 1.44-4.324 4.719v1.98H6.751v2.978h2.802v8.183c.555.083 1.117.14 1.694.14.522 0 1.031-.048 1.534-.116v-8.207z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_398"
          x1="6.751"
          y1="12.31"
          x2="16.201"
          y2="12.31"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9EE6FC" />
          <Stop offset="1" stopColor="#EBB9E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconFacebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFacebook;
