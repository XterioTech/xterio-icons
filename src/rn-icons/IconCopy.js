import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCopy = props => {
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
        d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCopy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCopy;
