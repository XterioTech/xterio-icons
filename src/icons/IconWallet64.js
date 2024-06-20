import React from 'react';
import PropTypes from 'prop-types';

const IconWallet64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 16H14v32h36v-6H33V22h17v-6zm0 11v10H38V27h12zm5 26V11H9v42h46zm-8-23h-6v4h4l2-4z"
        fill="currentColor"
      />
    </svg>
  );
};

IconWallet64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWallet64;
