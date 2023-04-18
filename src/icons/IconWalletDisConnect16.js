import React from 'react';
import PropTypes from 'prop-types';

const IconWalletDisConnect16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_222_797)">
          <mask
            id="a"
            style={{maskType: 'alpha'}}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path d="M15.5.5H.5v15h15V.5z" stroke="#FEFEFE" />
          </mask>
          <g mask="url(#a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.571 2.38L5.157 3.794 6.571 5.21l1.414-1.415a3 3 0 014.243 4.243l-1.414 1.414 1.414 1.415 1.414-1.415a5 5 0 00-7.07-7.07zM2.78 6.173l-1.45-1.45 1.414-1.415 9.9 9.9-1.415 1.414-1.378-1.378-.45.45a5 5 0 01-7.071-7.071l.45-.45zm5.657 5.656l-.45.45a3 3 0 11-4.243-4.242l.45-.45 4.243 4.242z"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_222_797">
            <rect width="16" height="16" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconWalletDisConnect16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconWalletDisConnect16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconWalletDisConnect16;
