import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSecurity24 = props => {
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
        d="M20 5.488l-8-2.4-8 2.4v6.982a6 6 0 002.913 5.145L12 20.668l5.087-3.053A6 6 0 0020 12.471V5.487zM12 23l6.116-3.67A8 8 0 0022 12.47V4L12 1 2 4v8.47a8 8 0 003.884 6.86L12 23zm1-11.268A2 2 0 0012 8a2 2 0 00-1 3.732V16l2-1v-3.268z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconSecurity24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSecurity24;
