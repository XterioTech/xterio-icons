import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Mask, Path, G } from 'react-native-svg';

const IconHelp12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="12"
      >
        <Path fill="#D9D9D9" d="M0 0h12v12H0z" />
      </Mask>
      <G
        mask="url(#a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      >
        <Path d="M6 10a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 106 1a5 5 0 000 10z" />
        <Path d="M6.396 4.604a.56.56 0 00-.792 0l-.75.75-.708-.707.75-.75a1.56 1.56 0 112.208 2.207l-.604.603V7.5h-1V6.293l.896-.896a.56.56 0 000-.793zM5.5 9V8h1v1h-1z" />
      </G>
    </Svg>
  );
};

IconHelp12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconHelp12;
