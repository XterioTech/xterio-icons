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

const IconReservoir = props => {
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
        <G clipPath="url(#clip0_0_674)">
          <Path
            d="M12.096.12C5.472.072.072 5.472.12 12.096c.048 6.456 5.328 11.712 11.784 11.784 6.648.048 12.048-5.352 11.976-11.976C23.832 5.448 18.552.168 12.096.12z"
            fill="#000"
          />
          <Path
            d="M18.177 15.357L11.94 11.76v-7.2l6.237 3.603v7.194z"
            fill="#80D8FF"
          />
          <Path
            d="M5.703 15.357l6.237-3.597v-7.2L5.703 8.163v7.194z"
            fill="#7ACFFF"
          />
          <Path
            d="M11.94 15.357l6.237-3.597-6.237-3.597-6.237 3.597 6.237 3.597z"
            fill="url(#paint0_linear_0_674)"
          />
          <Path
            opacity=".3"
            d="M11.94 18.96l-6.237-3.603V8.163l6.237 3.597v7.2z"
            fill="#E4F0FE"
          />
          <Path
            d="M5.703 15.357l6.237 3.603v-3.603L5.703 11.76v3.597z"
            fill="url(#paint1_linear_0_674)"
          />
          <Path
            opacity=".3"
            d="M11.94 18.96l6.237-3.603V8.163L11.94 11.76v7.2z"
            fill="#D0E6FF"
          />
          <Path
            d="M18.177 15.357L11.94 18.96v-3.603l6.237-3.597v3.597z"
            fill="url(#paint2_linear_0_674)"
          />
          <Path
            opacity=".3"
            d="M11.94 11.76l6.237-3.597L11.94 4.56 5.703 8.163l6.237 3.597z"
            fill="#fff"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_0_674"
            x1="5.938"
            y1="13.102"
            x2="18.108"
            y2="10.382"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#C132CE" />
            <Stop offset="1" stopColor="#425AFA" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_0_674"
            x1="8.102"
            y1="12.965"
            x2="9.897"
            y2="18.935"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#425AFA" />
            <Stop offset=".16" stopColor="#5A52F2" />
            <Stop offset=".55" stopColor="#9241DE" />
            <Stop offset=".84" stopColor="#B436D3" />
            <Stop offset="1" stopColor="#C132CE" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_0_674"
            x1="13.044"
            y1="17.83"
            x2="17.021"
            y2="12.951"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#C132CE" />
            <Stop offset=".1" stopColor="#AB39D6" />
            <Stop offset=".28" stopColor="#8545E3" />
            <Stop offset=".47" stopColor="#684EED" />
            <Stop offset=".65" stopColor="#5355F4" />
            <Stop offset=".83" stopColor="#4659F9" />
            <Stop offset="1" stopColor="#425AFA" />
          </LinearGradient>
          <ClipPath id="clip0_0_674">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconReservoir.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconReservoir;
