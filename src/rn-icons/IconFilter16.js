import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconFilter16 = props => {
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
        d="M1 1h14v5l-4 3v4.554l-3.257 1.303L5 15.954V9L1.8 6.6 1 6V1zm12 2H3v2l4 3v5l2-.8V8l4-3V3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconFilter16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFilter16;
