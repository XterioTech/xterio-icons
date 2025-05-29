import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_0_324)'];

const IconTelegram = props => {
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
        d="M9.772 18.19l.28-4.224 7.67-6.91c.339-.31-.07-.46-.52-.19l-9.468 5.982-4.094-1.299c-.88-.25-.89-.859.2-1.298l15.948-6.152c.73-.33 1.429.18 1.149 1.298L18.221 18.19c-.19.91-.74 1.129-1.498.71l-4.135-3.056L10.6 17.77c-.23.23-.42.42-.83.42z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_324"
          x1="3"
          y1="11.813"
          x2="21"
          y2="11.813"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9EE6FC" />
          <Stop offset="1" stopColor="#EBB9E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconTelegram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTelegram;
