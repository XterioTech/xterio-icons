import React from 'react';
import PropTypes from 'prop-types';

const IconPnWalletEntry24 = props => {
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
      <svg>
        <g clipPath="url(#clip0_222_843)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0H0v24h16l8-8V0zM1 23V1h22v14.586L15.586 23H1zM9.646 8.354L13.293 12l-3.647 3.646.708.708L14.707 12l-4.353-4.354-.708.708z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_843">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconPnWalletEntry24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPnWalletEntry24;
