import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCryptoBridgeConnected = props => {
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
        d="M17.964 3.44l4.549 8.187.31.559-.31.557-4.55 8.188-.327.59H7.186l-.328-.59-4.548-8.188-.31-.557.31-.559L6.858 3.44l.329-.591h10.449l.328.59zM4.629 12.185l3.91 7.038h7.745l3.908-7.038-3.909-7.037H8.54l-3.91 7.037zm12.871-.262l-3.67 3.059h1.31v1.685H9.175l1.788-1.49 5.458-4.549 1.08 1.295zm-3.639-2.729l-5.458 4.55-1.08-1.296 3.671-3.058H9.683V7.704h5.966l-1.788 1.49z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCryptoBridgeConnected.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCryptoBridgeConnected;
