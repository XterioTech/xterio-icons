import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_222_900)'];

const IconTwitterScalable = props => {
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
        d="M20.616 6.928c-.647.323-1.293.43-2.047.538.754-.43 1.293-1.077 1.508-1.938-.646.43-1.4.646-2.262.861a3.76 3.76 0 00-2.584-1.077c-1.83 0-3.446 1.616-3.446 3.554 0 .323 0 .539.107.754-2.907-.107-5.6-1.507-7.323-3.661-.323.538-.43 1.077-.43 1.83 0 1.185.646 2.262 1.615 2.908-.538 0-1.077-.215-1.615-.43 0 1.722 1.184 3.122 2.8 3.446-.323.107-.647.107-.97.107-.215 0-.43 0-.646-.107.431 1.4 1.723 2.476 3.339 2.476-1.185.97-2.693 1.508-4.416 1.508h-.861c1.615.97 3.446 1.616 5.384 1.616 6.462 0 10.016-5.385 10.016-10.016v-.43c.754-.54 1.4-1.185 1.83-1.94z"
        fill={color || originFill[0]}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_222_900"
          x1="3.385"
          y1="12.554"
          x2="20.616"
          y2="12.554"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9EE6FC" />
          <Stop offset="1" stopColor="#EBB9E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconTwitterScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTwitterScalable;
