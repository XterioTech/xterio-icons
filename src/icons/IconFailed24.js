import React from 'react';
import PropTypes from 'prop-types';

const IconFailed24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_840)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#E6B1F7"
          />
          <path
            d="M15.84 8.156l-7.68 7.68"
            stroke="#FEFEFE"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M8.16 8.156l7.68 7.68"
            stroke="#FEFEFE"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_840">
            <rect width="24" height="24" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconFailed24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconFailed24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconFailed24;
