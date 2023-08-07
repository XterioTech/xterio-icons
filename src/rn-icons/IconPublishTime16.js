import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconPublishTime16 = props => {
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
        d="M3 8a5 5 0 1110 0A5 5 0 013 8zm5-7a7 7 0 100 14A7 7 0 008 1zM7 5v3a1 1 0 001 1h3V7H9V5H7z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconPublishTime16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPublishTime16;
