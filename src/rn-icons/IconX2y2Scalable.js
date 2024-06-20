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

const IconX2y2Scalable = props => {
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
        <G clipPath="url(#clip0_1_686)">
          <Path
            d="M24 12c0-6.628-5.372-12-12-12S0 5.372 0 12s5.372 12 12 12 12-5.372 12-12z"
            fill="#fff"
          />
          <Path
            d="M19.622 6.163a8.16 8.16 0 100 11.674A9.584 9.584 0 0112 21.6 9.6 9.6 0 012.4 12a9.6 9.6 0 0117.222-5.837z"
            fill="url(#paint0_linear_1_686)"
          />
          <Path
            d="M7.822 16.67a6.528 6.528 0 100-9.338 7.668 7.668 0 016.098-3.012A7.68 7.68 0 0121.6 12a7.68 7.68 0 01-13.778 4.67z"
            fill="url(#paint1_linear_1_686)"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.76 12A5.76 5.76 0 116.24 12a5.76 5.76 0 0111.519 0zm-1.92 0a3.84 3.84 0 11-7.68 0 3.84 3.84 0 017.68 0z"
            fill="url(#paint2_linear_1_686)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_1_686"
            x1="2.4"
            y1="11.669"
            x2="21.6"
            y2="11.669"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#00E0FF" />
            <Stop offset="1" stopColor="#562EC8" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_1_686"
            x1="2.4"
            y1="11.669"
            x2="21.6"
            y2="11.669"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#00E0FF" />
            <Stop offset="1" stopColor="#562EC8" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_1_686"
            x1="2.4"
            y1="11.669"
            x2="21.6"
            y2="11.669"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#00E0FF" />
            <Stop offset="1" stopColor="#562EC8" />
          </LinearGradient>
          <ClipPath id="clip0_1_686">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconX2y2Scalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconX2y2Scalable;
