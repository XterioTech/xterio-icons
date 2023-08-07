import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const IconListing64 = props => {
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
        <Path
          d="M32 56c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24z"
          fill="url(#paint0_linear_222_860)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43 17H21l-3.363 8.968c-.875 2.334.033 4.774 1.863 6.077V41.5H18v3h15v-3H22.5V33h.01a5.205 5.205 0 004.496-2.582L27.25 30l.351.562a5.187 5.187 0 008.797 0L36.75 30l.243.418A5.205 5.205 0 0041.49 33c3.634 0 6.15-3.63 4.874-7.032L43 17zM20.446 27.021L23.079 20H40.92l2.633 7.021a2.205 2.205 0 01-3.97 1.885l-.243-.418-2.503-4.29-2.632 4.212-.352.562a2.187 2.187 0 01-3.709 0l-2.984-4.774-2.503 4.29-.243.418a2.205 2.205 0 01-3.97-1.885zm18.603 15.051L45.121 36 43 33.879l-4.05 4.049-2.051-1.865-2.018 2.22 4.168 3.789z"
          fill="#0A1161"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_222_860"
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

IconListing64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconListing64;
