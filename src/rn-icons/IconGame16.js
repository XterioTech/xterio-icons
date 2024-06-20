import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconGame16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 12H6l-1.333 2h-4l.666-10 1.334-1.333h10.666L14.667 4l.666 10h-4L10 12zm-5.07-2l-1.334 2h-.792l.475-7.117.216-.216h9.01l.216.216.475 7.117h-.792l-1.334-2H4.93zm5.737-2.667a.333.333 0 11.667 0 .333.333 0 01-.667 0zm2 0a1.667 1.667 0 11-3.333 0 1.667 1.667 0 013.333 0zm-6-1h1v2h-1v1h-2v-1h-1v-2h1v-1h2v1z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconGame16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGame16;
