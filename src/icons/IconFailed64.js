import React from 'react';
import PropTypes from 'prop-types';

const IconFailed64 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="64"
      height="64"
      viewBox="0 0 64 64"
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
          d="M40 24L24 40"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M24 24l16 16"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
        />
      </svg>
    </svg>
  );
};

IconFailed64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconFailed64.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconFailed64;
