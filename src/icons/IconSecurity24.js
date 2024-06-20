import React from 'react';
import PropTypes from 'prop-types';

const IconSecurity24 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 5.488l-8-2.4-8 2.4v6.982a6 6 0 002.913 5.145L12 20.668l5.087-3.053A6 6 0 0020 12.471V5.487zM12 23l6.116-3.67A8 8 0 0022 12.47V4L12 1 2 4v8.47a8 8 0 003.884 6.86L12 23zm1-11.268A2 2 0 0012 8a2 2 0 00-1 3.732V16l2-1v-3.268z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSecurity24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSecurity24;
