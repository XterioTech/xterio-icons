import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCheckError12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.293L2.354 1.646l-.708.708L5.293 6 1.646 9.646l.708.708L6 6.707l3.646 3.647.708-.708L6.707 6l3.647-3.646-.708-.708L6 5.293z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCheckError12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCheckError12;
