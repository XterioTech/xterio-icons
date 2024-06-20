import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_1_414)'];

const IconTiktokScalable = props => {
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
        d="M18.314 10.623a6.056 6.056 0 01-3.639-1.215v5.505c0 2.81-2.166 5.087-4.838 5.087C7.167 20 5 17.723 5 14.912c0-2.81 2.166-5.087 4.838-5.087.267 0 .526.023.78.067v2.916a2.074 2.074 0 00-.76-.144c-1.192 0-2.16 1.016-2.16 2.27s.968 2.27 2.16 2.27c1.19 0 2.158-1.017 2.158-2.27V4h2.698c0 2.102 1.62 3.805 3.619 3.805v2.817l-.019.001z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_414"
          x1="5"
          y1="12.276"
          x2="18.333"
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

IconTiktokScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTiktokScalable;
