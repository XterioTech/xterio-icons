import React from 'react';
import PropTypes from 'prop-types';

const IconFailed64 = props => {
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
      <svg
        width="64"
        height="64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 56c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24z"
          fill="#E6B1F7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.536 32l8-8L40 20.464l-8 8-8-8L20.465 24l8 8-8 8L24 43.535l8-8 8 8L43.536 40l-8-8z"
          fill="#FEFEFE"
        />
      </svg>
    </svg>
  );
};

IconFailed64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFailed64;
