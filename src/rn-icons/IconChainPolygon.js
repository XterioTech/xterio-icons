import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from 'react-native-svg';

const IconChainPolygon = props => {
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
        <G clipPath="url(#clip0_0_635)">
          <Circle cx="12" cy="12" r="12" fill="#fff" />
          <Path
            d="M15.894 14.267l3.321-1.912a.57.57 0 00.285-.492V8.038a.57.57 0 00-.285-.492l-3.32-1.912a.573.573 0 00-.57 0l-3.32 1.912a.57.57 0 00-.286.492v6.834l-2.328 1.34-2.329-1.34V12.19l2.329-1.34 1.536.884V9.935l-1.251-.72a.573.573 0 00-.57 0l-3.321 1.912a.57.57 0 00-.285.492v3.824c0 .203.11.391.285.493l3.32 1.912a.574.574 0 00.57 0l3.32-1.912a.57.57 0 00.286-.492V8.61l.042-.024 2.286-1.316 2.329 1.34v2.682l-2.329 1.34-1.533-.883v1.8l1.248.719a.573.573 0 00.57 0v-.001z"
            fill="url(#paint0_linear_0_635)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_0_635"
            x1="6.69"
            y1="15.966"
            x2="18.7"
            y2="7.185"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#A726C1" />
            <Stop offset=".88" stopColor="#803BDF" />
            <Stop offset="1" stopColor="#7B3FE4" />
          </LinearGradient>
          <ClipPath id="clip0_0_635">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconChainPolygon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainPolygon;
