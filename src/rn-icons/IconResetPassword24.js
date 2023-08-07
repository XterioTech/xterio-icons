import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconResetPassword24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6a6 6 0 1112 0v2.083a9.924 9.924 0 00-2-1.178V6a4 4 0 00-8 0V9.07a8 8 0 11-2 1.638V6zm0 10a6 6 0 1112 0 6 6 0 01-12 0zm6-2a2 2 0 00-1 3.732V19l2-.5v-.768A2 2 0 0012 14z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconResetPassword24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconResetPassword24;
