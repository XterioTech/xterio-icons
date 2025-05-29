import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const originFill = ['url(#paint0_linear_605_29)'];

const IconTokenXter = props => {
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
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill={color || originFill[0]}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.658 16.05a5.478 5.478 0 00-6.199-8.667c-.515.208-.976.505-1.422.832-.539.4-1.153.52-1.812.4-.51-.09-.964-.307-1.402-.562a1.074 1.074 0 01-.521-.74 1.67 1.67 0 00-3.296.226c-.1 1.2 1.092 2.114 2.225 1.7a1.139 1.139 0 01.964.07c.32.165.624.362.905.588.695.57 1.036 1.284.956 2.194-.051.643.02 1.289.209 1.905a5.478 5.478 0 009.393 2.053zm-6.455-5.097a2.761 2.761 0 104.591 3.07 2.761 2.761 0 00-4.59-3.07z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_605_29"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.035" stopColor="#180F3E" />
          <Stop offset="1" stopColor="#6221EB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

IconTokenXter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenXter;
