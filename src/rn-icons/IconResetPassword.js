import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconResetPassword = props => {
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
        d="M6 8V7a6 6 0 1112 0v1h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm13 2H5v10h14V10zm-8 5.732A2 2 0 0112 12a2 2 0 011 3.732V18h-2v-2.268zM8 8h8V7a4 4 0 00-8 0v1z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconResetPassword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconResetPassword;
