import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconArrow16 = props => {
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
        d="M7.293 10.707a1 1 0 001.414 0L13.414 6 12 4.586l-4 4-4-4L2.586 6l4.707 4.707z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconArrow16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconArrow16;
