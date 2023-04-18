import React from 'react';
import PropTypes from 'prop-types';

const IconSuccess24 = props => {
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
        <g clipPath="url(#clip0_222_841)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="url(#paint0_linear_222_841)"
          />
          <path
            d="M7.5 13l3 3 6-6"
            stroke="#0A1161"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_222_841"
            x1="0"
            y1="12.414"
            x2="24"
            y2="12.414"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9EE6FC" />
            <stop offset="1" stopColor="#EBB9E7" />
          </linearGradient>
          <clipPath id="clip0_222_841">
            <rect width="24" height="24" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconSuccess24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconSuccess24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconSuccess24;
