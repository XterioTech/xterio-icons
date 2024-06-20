import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconDelete16 = props => {
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
        d="M4 1h8v2H4V1zM1 4h14v2H4v7h8V7h2v8H2V6H1V4zm4 4h2v3H5V8zm6 0H9v3h2V8z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconDelete16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDelete16;
