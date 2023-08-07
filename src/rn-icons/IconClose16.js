import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconClose16 = props => {
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
        d="M8 6.586l-4-4L2.586 4l4 4-4 4L4 13.414l4-4 4 4L13.414 12l-4-4 4-4L12 2.586l-4 4z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconClose16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconClose16;
