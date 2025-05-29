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

const IconBybit = props => {
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
        <G clipPath="url(#clip0_307_44)">
          <Path
            d="M2.5 6.537A4.037 4.037 0 016.537 2.5h10.925A4.038 4.038 0 0121.5 6.537v10.925a4.038 4.038 0 01-4.038 4.038H6.537A4.038 4.038 0 012.5 17.462V6.537z"
            fill="#404347"
          />
          <Path
            d="M4.136 8.288c-.171-.59.194-1.2.794-1.327l10.008-2.125c.475-.101.958.135 1.17.572l4.495 9.284-12.667 6.702-3.8-13.106z"
            fill="url(#paint0_linear_307_44)"
          />
          <Path
            d="M4.267 9.012a1.056 1.056 0 01.878-1.34l13.265-1.72a1.056 1.056 0 011.17.842l1.92 9.692-13.67 4.856-3.563-12.33z"
            fill="#fff"
          />
          <Path
            d="M2.5 9.889c0-1.166.945-2.111 2.111-2.111h12.667A4.222 4.222 0 0121.5 12v5.278a4.222 4.222 0 01-4.222 4.222H6.722A4.222 4.222 0 012.5 17.278v-7.39z"
            fill="#000"
          />
          <Path d="M15.07 15.713v-3.956h.772v3.956h-.772z" fill="#F7A600" />
          <Path
            d="M6.265 16.893H4.611v-3.955H6.2c.771 0 1.221.433 1.221 1.11a.915.915 0 01-.488.818c.238.11.544.36.544.888 0 .74-.506 1.14-1.21 1.14zm-.127-3.266h-.755v.911h.755c.327 0 .51-.183.51-.456 0-.272-.183-.455-.51-.455zm.05 1.605h-.805v.972h.805c.35 0 .516-.222.516-.488 0-.267-.167-.484-.516-.484zM9.602 15.271v1.622h-.766v-1.622l-1.188-2.333h.838l.738 1.594.727-1.594h.838L9.602 15.27zM12.985 16.893h-1.654v-3.955h1.588c.771 0 1.22.433 1.22 1.11a.915.915 0 01-.487.818c.238.11.544.36.544.888 0 .74-.506 1.14-1.21 1.14zm-.127-3.266h-.755v.911h.755c.327 0 .51-.183.51-.456 0-.272-.183-.455-.51-.455zm.05 1.605h-.805v.972h.805c.35 0 .516-.222.516-.488 0-.267-.167-.484-.516-.484zM18.356 13.627v3.266h-.771v-3.266h-1.033v-.69h2.837v.69h-1.033z"
            fill="#fff"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_307_44"
            x1="4.083"
            y1="8.026"
            x2="20.774"
            y2="7.19"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFD748" />
            <Stop offset="1" stopColor="#F7A600" />
          </LinearGradient>
          <ClipPath id="clip0_307_44">
            <Path
              fill="#fff"
              transform="translate(2.5 2.5)"
              d="M0 0h19v19H0z"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconBybit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconBybit;
