import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_1_460)'];

const IconDiscordScalable = props => {
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
        d="M18.261 6.158a.046.046 0 00-.023-.021A14.846 14.846 0 0014.574 5a.055.055 0 00-.059.028c-.168.304-.32.617-.456.936a13.712 13.712 0 00-4.115 0 9.477 9.477 0 00-.463-.936A.057.057 0 009.42 5c-1.265.218-2.496.6-3.663 1.136a.052.052 0 00-.024.02C3.4 9.643 2.76 13.042 3.074 16.399a.061.061 0 00.024.043 14.93 14.93 0 004.494 2.27.058.058 0 00.064-.02c.347-.472.654-.972.92-1.495a.057.057 0 00-.032-.08 9.827 9.827 0 01-1.404-.668.058.058 0 01-.006-.096c.095-.07.188-.144.279-.219a.056.056 0 01.058-.007c2.946 1.344 6.135 1.344 9.046 0a.056.056 0 01.059.007c.091.075.184.148.28.219a.058.058 0 01.014.076.058.058 0 01-.02.02 9.227 9.227 0 01-1.404.668.058.058 0 00-.033.033.056.056 0 00.002.047c.27.52.577 1.02.919 1.494a.057.057 0 00.063.022A14.882 14.882 0 0020.9 16.44a.059.059 0 00.023-.042c.376-3.88-.628-7.252-2.66-10.24zm-9.246 8.196c-.887 0-1.618-.813-1.618-1.813s.717-1.814 1.618-1.814c.908 0 1.632.822 1.618 1.814 0 1-.717 1.813-1.618 1.813zm5.981 0c-.887 0-1.618-.813-1.618-1.813s.717-1.814 1.618-1.814c.908 0 1.632.822 1.618 1.814 0 1-.71 1.813-1.618 1.813z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_460"
          x1="3"
          y1="12.094"
          x2="21"
          y2="12.094"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9EE6FC" />
          <Stop offset="1" stopColor="#EBB9E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconDiscordScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDiscordScalable;
