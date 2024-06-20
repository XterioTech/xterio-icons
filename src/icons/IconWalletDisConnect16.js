import React from 'react';
import PropTypes from 'prop-types';

const IconWalletDisConnect16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <g clipPath="url(#clip0_1_90)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.57 2.38L5.158 3.794 6.57 5.21l1.414-1.415a3 3 0 014.243 4.243l-1.414 1.414 1.414 1.415 1.414-1.415a5 5 0 00-7.071-7.07zM2.78 6.173l-1.45-1.45 1.414-1.415 9.9 9.9-1.415 1.414-1.378-1.378-.45.45a5 5 0 01-7.072-7.071l.45-.45zm5.656 5.656l-.45.45a3 3 0 11-4.242-4.242l.45-.45 4.242 4.242z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_90">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconWalletDisConnect16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletDisConnect16;
